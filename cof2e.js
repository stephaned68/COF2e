/**
 * COF2e Sheet Worker
 */

const SWData = {
  settings: {
    debugMode: false,
    hiddenClass: "hidden",
    visibleClass: "visible"
  },
  SHEET_TYPE: {
    PC: "pc",
    NPC: "npc"
  },
  RT_OPTIONS: {
    template: "cof2"
  },
  PC: {
    ABILITIES: [ "agilité", "constitution", "force", "perception", "charisme", "intelligence", "volonté" ],
    COMBAT: {
      init: [ "per", "init_buff" ],
      attacks: [ 
        [ "atkcac", "for", "Au Contact" ],
        [ "atktir", "agi", "A Distance" ], 
        [ "atkmag", "vol", "Magique" ]
      ]
    },
    CONDITIONS: [ 
      { 
        code: "F", 
        button: "affaibli",
        label: "Affaibli",
        effects: {
          droll: "dmalus"
        }
      },
      { 
        code: "A", 
        button: "aveugle",
        label: "Aveuglé",
        effects: {
          init: -5,
          atkcac: -5,
          def: -5,
          atktir: -10
        } 
      }, 
      { 
        code: "O", 
        button: "essoufle",
        label: "Essouflé",
        effects: {
          movement: 5
        }
      }, 
      { 
        code: "E", 
        button: "etourdi",
        label: "Etourdi",
        effects: {
          def: -5
        }
      }, 
      { 
        code: "I", 
        button: "immobilise", 
        label: "Immobilisé",
        effects: {
          movement: 0,
          atkcac: "dmalus",
          atktir: "dmalus",
          atkmag: "dmalus",
        }
      }, 
      { 
        code: "V", 
        button: "invalide", 
        label: "Invalide",
        effects: {
          movement: 5
        }
      }, 
      { 
        code: "P", 
        button: "paralyse", 
        label: "Paralysé"
      }, 
      { 
        code: "L", 
        button: "ralenti",
        label: "Ralenti" 
      }, 
      { 
        code: "R", 
        button: "renverse",
        label: "Renversé",
        effects: {
          atkcac: -5,
          atktir: -5,
          atkmag: -5,
          def: -5
        }
      }, 
      { 
        code: "S", 
        button: "surpris",
        label: "Surpris",
        effects: {
          def: -5
        }
      }
    ]
  }
}

// =================
// UTILITY FUNCTIONS
// =================

/**
* Convert to integer
* @param {string} value - value to cast
* @param {int} onError - default value on error
* @returns integer value
*/
function int(value, onError = 0) {
  return parseInt(value) || onError;
}

/**
* Convert to float
* @param {string} value - value to cast
* @param {float} onError - default value on error
* @returns float value
*/
function float(value, onError = 0) {
  return parseFloat(value) || onError;
}


/**
* Get string or empty value
* @param {string} value - value to cast
* @param {string} onError - default value on null/undefined
* @returns string value
*/
function stringOrDefault(value, onError = "") {
  return value || onError;
}

/**
* Capitalize string
* @param {string} str - string to capitalize
* @returns capitalized string
*/
function capitalize(str) {
  if (str && str !== "")
    return str.charAt(0).toUpperCase() + str.substring(1);
}

/**
 * Return ability short name
 * @param {string} ability - ability name
 * @returns {string}
 */
function shorten(ability) {
  return ability.substring(0, 3);
}

/**
* Log to JS console with color & style
* @param {any} data - data to log
* @param {string} title - title of logged data
* @param {string} color - color name for log line
* @param {string} style - CSS style for log line
* @param {string} headerStyle - CSS style for log title
*/
function clog(
  data,
  title = "",
  color = { text: "green", back: "" },
  style = "font-size:12px; font-weight:normal;",
  headerStyle = "font-size:13px; font-weight:bold;"
) {
  if (!SWData.settings.debugMode)
    return;

  title = stringOrDefault(title, "");
  if (title !== "") title = ` Sheet-Worker : ${title} `;
  const titleStyle = `color:${color.text}; background-color:${color.back}; ${headerStyle} text-decoration:underline;`;
  const textStyle = `color:${color.text}; background-color:${color.back}; ${style}`;

  if (title) {
    if (typeof data === "object") {
      const output = `%c${title}`;
      console.log(output, titleStyle, data);
    } else {
      const output = `%c${title} %c${data}`;
      console.log(output, titleStyle, textStyle);
    }
  } else {
    if (typeof data === "object") {
      console.log(data);
    } else {
      const output = `%c${data}`;
      console.log(output, textStyle);
    }
  }
}

/**
* Generate a random number between 1 and max
* @param {integer} max - Upper bound of range
* @returns {integer} Generated random number
*/
function getRandom(max) {
  const min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Parse a chunk of data into name & value
* @param {string} data - Chunk of data to parse
* @param {string} delim - Delimiter (defaults to ':')
* @returns an object with name and value properties
*/
function parseNameValue(data, delim) {
  delim = stringOrDefault(delim, ":");
  if (data.indexOf(delim) !== -1) {
    let [ key, value ] = data.split(delim);
    key = stringOrDefault(key).trim();
    value = stringOrDefault(value).trim()
  }
  return { name: key, value };
}

/**
 * Return a sequence of numbers as an array
 * @param {number} count - Length of the sequence
 * @param {number} base - Base number for the sequence (default 1)
 * @returns {number[]}
 */
function seq(count, base = 1) {
  return [ ...Array(count).keys() ].map(i => i += base);
}

/**
 * Return a sequence of names
 * @param {number} count - Length of the sequence
 * @param {string} name - Name template (with | placeholder to insert the sequence)
 * @param {number} base - Base number for the sequence (default 1)
 * @returns {string[]}
 */
 function nameSeq(count, name, base = 1) {
  const [ prepend, append ] = name.split("|");
  return seq(count, base).map(s => `${prepend || ""}${s}${append || ""}`)
}

/**
 * Return a list of event as array or as string
 * @param {string} eventName - Name of the event
 * @param {string[]} attributeList - List of attributes
 * @param {string} joinChar - Character to use for joining the items
 * @returns {string[]|string}
 */
function eventList(eventName, attributeList, joinChar = "") {
  const result = attributeList.map(a => `${eventName}:${ a.toLowerCase() }`)
  return joinChar !== "" ? result.join(joinChar) : result;
}

/**
* Remove all rows for a repeating section
* @param {string} sectionName Repeating section to clear
*/
function removeRepeatingAll(sectionName) {
  getSectionIDs(sectionName, function (rowIds) {
    rowIds.forEach(rowId => {
      removeRepeatingRow(`repeating_${sectionName}_${rowId}`);
    });
  });
}

/** @typedef sendChatMsgOptions
 * @property {string} title - Title of the message
 * @property {string} template - Name of roll template
 * @property {string} whisper - Target for whispered message
 */

/**
 * Send a message to chat
 * @param {string|string[]} msg - Message to send
 * @param {sendChatMsgOptions} options - Options for the message
 */
function buildChatMsg(msg, options = {}) {
  let { title = "", template = "default", whisper = "@{togm}" } = options;
  if (whisper.charAt(0) !== "@" && whisper !== "") whisper = "/w \"" + whisper + "\" ";
  let chatMsg;
  if (Array.isArray(msg)) {
    chatMsg = msg.map(t => `{{${t} }}`).join(" ");
  } else {
    chatMsg = "{{" + msg + "}}";
  }
  return `${whisper}&{template:${template}} ${title ? (template === "default" ? `{{name=${title} }}` : `{{${title} }}`) : "" } ${chatMsg}`;
}

/**
 * Send a message to chat
 * @param {string|string[]} msg - Message to send
 * @param {sendChatMsgOptions} options - Options for the message
 */
 function sendChatMsg(msg, options = {}) {
  const chatCmd = buildChatMsg(msg, options);
  startRoll(chatCmd, roll => {
      finishRoll(roll.rollId);
  });
}

/**
 * Return COF 2e rolltemplate
 * @param {object} props - List of {{ }} sections as object properties
 * @returns {string[]}
 */
function cof2RollTemplate(props) {
  return [
    "perso=@{character_name}",
    ...Object.entries(props).map(e => {
      const [ prop, value ] = e;
      return `${prop}=${value} `;
    })
  ];
}

/**
 * Send a single value roll query to chat and process response
 * @param {string} prompt - Input box label
 * @param {object} callback - Callback function to process input
 */
function askValue(prompt, callback) {
  const askValue = `!{{ask=[[?{${prompt}}]]}}`;
  startRoll(askValue, question => {
    const query = question.results.ask.result;
      if(query && callback) {
          callback(query);
      }
  });
}

/**
 * Send a drop-down roll query to chat and process response
 * @param {string|array} askParams - Parameters of the roll query 
 * @param {object} callback - Callback function to process input
 */
function ask(askParams, callback) {
  if (!Array.isArray(askParams)) {
    askParams = [ askParams, "Non", "Oui" ];
  }
  const [ prompt, ...choices ] = askParams;
  const choice = choices.map((ch, ix) => `${ch},${ix}`).join("|");
  const ask = `!{{ask=[[?{${prompt}|${choice}}]]}}`;
  startRoll(ask, question => {
      const query = question.results.ask.result;
      if(query && callback) {
          callback(query, choices);
      }
      //finishRoll(question.rollId);
  });
};

/**
 * Add numeric attributes values
 * @param {object} values - getAttrs object with numeric values
 * @returns - {number}
 */
function addValues(values) {
  return Object.keys(values).reduce((result, attr) => {
    return result + int(values[attr]);
  }, 0);
}

/**
 * Return the die roll formula for type
 * @param {string} type - Type of d20 roll
 * @returns - {string}
 */
function dieRoll(type) {
  if (type === "S") return "2d20kh1";
  if (type === "H") return "{2d20kh1, 0d20+10}kh1";
  return "1d20";
}

/**
 * Show a div area via Roll20 jQuery
 * @param {string} div - Name of div area to show
 */
function showArea(div) {
  $20(`.${div}`).removeClass(SWData.settings.hiddenClass);
  $20(`.${div}`).addClass(SWData.settings.visibleClass);
}

/**
 * Hide a div area via Roll20 jQuery
 * @param {string} div - Name of div area to hide
 */
function hideArea(div) {
  $20(`.${div}`).removeClass(SWData.settings.visibleClass);
  $20(`.${div}`).addClass(SWData.settings.hiddenClass);
}

// ============
// SHEET EVENTS
// ============

/**
 * Change identity heading
 */
on("change:sheet_type", function() {
  getAttrs([ "sheet_type" ], function(value) {
    const sheet_type = stringOrDefault(value.sheet_type);
    if (!sheet_type) return;

    Object.values(SWData.SHEET_TYPE).forEach(type => {
      if (type === sheet_type) {
        showArea(`identity-${type}`);
      } else {
        hideArea(`identity-${type}`);
      }
    })

  });
});

/**
 * Change tabs
 */
[ 
  "pc_main", "pc_abilities", "pc_gears", "pc_config", "pc_version",
  "npc_main", "npc_config"
].forEach(button => {
  on(`clicked:${button}-btn`, function() {
    const [ type, value ] = button.split("_");
    setAttrs({
        [`${type}_tab`]: value
    });
  });
});

/**
 * Change subtabs
 */
[ "rolls", "buffs" ].forEach(button => {
  on(`clicked:pc_${button}-btn`, function() {
      setAttrs({
          pc_subtab: button
      });
  });
});

/**
 * Update the base attack scores
 */
function updateAttacksBase() {
  getAttrs([ "niveau" ], function(value) {
    const level = int(value.niveau);
    const atkBase = Math.min(level, 10);
    setAttrs({
      atkcac_base: atkBase,
      atktir_base: atkBase,
      atkmag_base: atkBase,
    });
  })
}

/**
 * On level change
 */
on("change:niveau", updateAttacksBase);

/**
 * On ability components change
 */
SWData.PC.ABILITIES.forEach(ability => {
  const short = shorten(ability);
  const attrs = [ 
    short, 
    `${short}_buff` 
  ];
  on(eventList("change", attrs, " "), function () {
    getAttrs(attrs, function(values) {
      const score = addValues(values);
      setAttrs({ [`${short}_test`]: score });
    });
  });
});

/**
 * Update the init attribute
 */
function updateInit() {
  getAttrs(SWData.PC.COMBAT.init, function(values) {
    const init = 10 + addValues(values);
    setAttrs({ init });
  });
}

/**
 * On init components change
 */
on(eventList("change", SWData.PC.COMBAT.init, " "), updateInit);

/**
 * On attacks components change
 */
SWData.PC.COMBAT.attacks.forEach(attk => {
  const [ attack, ability ] = attk;
  const changed = [ `${attack}_base`, `${ability}` , `${attack}_buff` ];
  on(eventList("change", changed, " "), function() {
    getAttrs(changed, function(values) {
      const score = addValues(values);
      setAttrs({ [`${attack}`]: score });
    });
  });
});

/**
 * Compute max DR
 */
function updateDRMax() {
  getAttrs([ "con" ], function(value) {
    const dr_max = 2 + int(value.con);
    setAttrs({ dr_max });
  });
}

/**
 * On CON change
 */
on("change:con", updateDRMax);

/**
 * On ability button click
 */
SWData.PC.ABILITIES.forEach(ability => {
  const short = shorten(ability);
  on(`clicked:${short}-btn`, function () {
    getAttrs([ `d${short}_sup` ], function(values) {
      const [ dType ] = Object.keys(values);
      const roll = dieRoll(values[dType]);
      const armor_malus = short === "agi" ? " - @{armor_malus}[Armure]" : "";
      const carac = `[[${roll}[Dé] + @{${short}_test}[Bonus ${short.toUpperCase()}]${armor_malus} ]] `;
      const chatMsg = cof2RollTemplate({
        lsub: "Test",
        rsub: capitalize(ability),
        roll: carac
      });
      sendChatMsg(chatMsg, SWData.RT_OPTIONS);
      console.log(chatMsg);
    });
  });
});

/**
 * On attack button click
 */
SWData.PC.COMBAT.attacks.forEach(attk => {
  const [ attack, , description ] = attk;
  on(`clicked:${attack}-btn`, function () {
    const attaque = `[[1d20cs20cf1[Dé] + @{${attack}}[Bonus] ]]`;
    const chatMsg = cof2RollTemplate({
      lsub: "Attaque",
      rsub: description,
      roll: attaque
    });
    sendChatMsg(chatMsg, SWData.RT_OPTIONS);
  });
});

on("clicked:drecup-btn", function() {
  getAttrs([ "dr", "drecup", "niveau" ], function(values) {
    const dr = int(values.dr);
    if (dr === 0) {
      const chatMsg = cof2RollTemplate({
        lsub: "Jet",
        rsub: "Récupération Rapide",
        text: "Plus de DR !",
        text_style: "color: red;"
      });
      sendChatMsg(chatMsg, SWData.RT_OPTIONS);
      return;
    }

    dr -= 1;
    const dRecup = `d${values.drecup}`;
    const bRecup = Math.ceil(int(values.niveau) / 2);
    const recup = `[[${dRecup}[DR] + ${bRecup}[Niveau/2] ]] PV récupérés`;
    const chatMsg = cof2RollTemplate({
      lsub: "Jet",
      rsub: "Récupération Rapide",
      roll: recup,
      text: `${dr} DR restants`
    });
    sendChatMsg(chatMsg, SWData.RT_OPTIONS);

    setAttrs({ dr });
  });
});

/**
 * Show weapons options
 */
on("clicked:repeating_armes:arme-opt-btn", function() {
  getAttrs([ "repeating_armes_arme-opt" ], function(value) {
    let [ option ] = Object.values(value);
    option = 1 - int(option);
    setAttrs( { ["repeating_armes_arme-opt"]: option });
  });
});
