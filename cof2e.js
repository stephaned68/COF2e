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
    ABILITIES: [ 
      "agilité",
      "constitution",
      "force",
      "perception",
      "charisme",
      "intelligence",
      "volonté"
    ],
    COMBAT: {
      init: [ "per", "init_buff" ],
      attacks: [ 
        [ "atkcac", "for", "Au Contact" ],
        [ "atktir", "agi", "A Distance" ], 
        [ "atkmag", "vol", "Magique" ]
      ],
      def: [ "armure", "armure_eqp", "bouclier", "bouclier_eqp", "agi", "def_buff", "def_action" ]
    },
    BUFFS: {
      To: [ 
        "agi",
        "con",
        "for",
        "per",
        "cha",
        "int",
        "vol",
        "init",
        "atkcac",
        "atktir",
        "atkmag",
        "def",
        "pv",
        "dr",
        "pm",
        "pc",
      ],
      From: [
        "agi",
        "con",
        "for",
        "per",
        "cha",
        "int",
        "vol",
        "rangs_voies",
        "niveau",
      ]
    },
    CONDITIONS: [ 
      { 
        name: "affaibli",
        label: "Affaibli",
        effects: { },
        description: [
          "Dé malus à toutes les attaques"
        ]
      },
      { 
        name: "aveugle",
        label: "Aveuglé",
        effects: {
          init: -5,
          atkcac: -5,
          def: -5,
          atktir: -10
        },
        description: [
          "Pas d'attaque magique nécessitant de voir la cible"
        ]
      }, 
      { 
        name: "essoufle",
        label: "Essouflé",
        effects: { },
        description: [
          "Déplacement limité à 5 m par action de mouvement"
        ]
      }, 
      { 
        name: "etourdi",
        label: "Etourdi",
        effects: {
          def: -5
        },
        description: [
          "Aucune action possible"
        ]
      }, 
      { 
        name: "immobilise", 
        label: "Immobilisé",
        effects: { },
        description: [
          "Pas de déplacement",
          "Dé malus aux tests d'attaque"
        ]
      }, 
      { 
        name: "invalide", 
        label: "Invalide",
        effects: { },
        description: [
          "Déplacement limité à 5 m par action de mouvement"
        ]
      }, 
      { 
        name: "paralyse", 
        label: "Paralysé",
        effects: { },
        description: [
          "Aucune action possible",
          "Touché et critique automatique en cas d'attaque"
        ]
      }, 
      { 
        name: "ralenti",
        label: "Ralenti",
        effects: { },
        description: [
          "Une seule action par round (attaque ou mouvement)"
        ]
      }, 
      { 
        name: "renverse",
        label: "Renversé",
        effects: {
          atkcac: -5,
          atktir: -5,
          atkmag: -5,
          def: -5
        },
        description: [
          "Nécessite une action d'attaque pour se relever"
        ]
      }, 
      { 
        name: "surpris",
        label: "Surpris",
        effects: {
          def: -5
        },
        description: [
          "Pas d'action au premier round de combat"
        ]
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
function intval(value, onError = 0) {
  return parseInt(value) || onError;
}

/**
* Convert to float
* @param {string} value - value to cast
* @param {float} onError - default value on error
* @returns float value
*/
function numval(value, onError = 0) {
  return parseFloat(value) || onError;
}


/**
* Get string or empty value
* @param {string} value - value to cast
* @param {string} onError - default value on null/undefined
* @returns string value
*/
function strval(value, onError = "") {
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

  title = strval(title, "");
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
  delim = strval(delim, ":");
  if (data.indexOf(delim) !== -1) {
    let [ key, value ] = data.split(delim);
    key = strval(key).trim();
    value = strval(value).trim()
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
function buildChatMsg(msg, options = SWData.RT_OPTIONS) {
  let { title = "", template = "default", whisper = "@{togm}" } = options;
  if (whisper.charAt(0) !== "@" && whisper !== "") whisper = "/w \"" + whisper + "\" ";
  let chatMsg;
  if (Array.isArray(msg)) {
    chatMsg = msg.map(t => `{{${t}}}`).join(" ");
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
 function sendChatMsg(msg, options = SWData.RT_OPTIONS) {
  const chatCmd = buildChatMsg(msg, options);
  startRoll(chatCmd, roll => {
    let save = 1;
    if (roll.results.save) 
      save = roll.results.save.result;
    console.log(save)
    let last_rolls = "";
    if (roll.results.roll)
      last_rolls += roll.results.roll.result;
    if (roll.results.broll)
      last_rolls += "|" + roll.results.broll.result;
    if (last_rolls !== "" && save)
      setAttrs({ last_rolls });
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
      const space = (value !== "") ? " " : ""
      return `${prop}=${value}${space}`;
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
    return result + intval(values[attr]);
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
    const sheet_type = strval(value.sheet_type);
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
function updateAttacksBase(level, attributes) {
  const atkBase = Math.min(level, 10);
  attributes.set("atkcac_base", atkBase);
  attributes.set("atktir_base", atkBase);
  attributes.set("atkmag_base", atkBase);
  return attributes;
}

function updateDEvol(level, attributes) {
  let devol;
  switch (true) {
    case level >= 15:
      devol = "d12";
      break;
    case level >= 12:
      devol = "d10";
      break;
    case level >= 9:
      devol = "d8";
      break;
    case level >= 6:
      devol = "d6";
      break;
    default:
      devol = "d4";
  }
  attributes.set("devol", devol);
  return attributes;
}

/**
 * On level change
 */
on("change:niveau", function() {
  getAttrs([ "niveau" ], function(value) {
    const level = intval(value.niveau);
    let updateAttrs = new Map;
    updateAttrs = updateAttacksBase(level, updateAttrs);
    updateAttrs = updateDEvol(level, updateAttrs);
    setAttrs(Object.fromEntries(updateAttrs))
  });
});

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
    const dr_max = 2 + intval(value.con);
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
    getAttrs([ `d${short}_sup`, "armure_malus", "armure_eqp" ], function(values) {
      const [ dType ] = Object.keys(values);
      const roll = dieRoll(values[dType]);
      const armure_eqp = intval(values.armure_eqp);
      const armure_malus = intval(values.armure_malus) * armure_eqp;
      const armor_malus = short === "agi" ? ` - ${armure_malus}[Malus armure]` : "";
      const carac = `[[${roll}[Dé] + @{${short}_test}[Bonus ${short.toUpperCase()}]${armor_malus} ]] `;
      const chatMsg = cof2RollTemplate({
        lsub: "Test",
        rsub: capitalize(ability),
        roll: carac
      });
      sendChatMsg(chatMsg);
    });
  });
});

/**
 * On attack button click
 */
SWData.PC.COMBAT.attacks.forEach(attk => {
  const [ attack, , description ] = attk;
  on(`clicked:${attack}-btn`, function () {
    const attack = `[[1d20cs20cf1[Dé] + @{${attack}}[Bonus] ]]`;
    const chatMsg = cof2RollTemplate({
      lsub: "Attaque",
      rsub: description,
      roll: attack,
      broll: attack
    });
    sendChatMsg(chatMsg);
  });
});

/**
 * Update PV & DR
 * @param {number} vp - Number of PV lost or gained
 * @param {number} lossOrGain - Type of change (-1 = loss, +1 = gain)
 * @param {boolean} [buttonClicked=true] - Updated via button
 */
function updatePVDR(vp, lossOrGain, buttonClicked = true) {
  getAttrs([ "sheet_type", "pv", "pv_max", "dr", "rd" ], function (values) {
    let pv = intval(values.pv);
    const pvMax = intval(values.pv_max);
    let dr = intval(values.dr);
    const rd = (lossOrGain === -1 ) ? "\n" + "RD " + strval(values.rd) : "";
    let effect = "";
    const updateAttrs = new Map;

    // already up-to-date if not via button
    if (buttonClicked) {
      pv += vp * lossOrGain;
      updateAttrs.set("pv", pv);
    }

    if (pv > pvMax) {
      pv = pvMax;
      updateAttrs.set("pv", pv);
    }
    if (pv < 0) {
      pv = 0;
      updateAttrs.set("pv", pv);
    }

    if (pv > 1) {
      updateAttrs.set("condition_affaibli", 0);
    } else if (pv === 1) {
      effect = " et subit la condition Affaibli-e (PV = 1)";
      updateAttrs.set("condition_affaibli", 1);
    } else if (pv === 0) {
      dr = Math.max(dr - 1, 0);
      updateAttrs.set("dr", dr);
      effect = ", perd un DR et tombe au sol inconscient-e (PV = 0)"
    }
    
    const chatMsg = cof2RollTemplate({
        lsub: "PV",
        rsub: `${ lossOrGain === -1 ? "Blessure" : "Soins" } `,
        text : `@{character_name} ${ lossOrGain === -1 ? "perd" : "gagne" } ${vp} PV${effect}${rd} `
    });
    sendChatMsg(chatMsg, {
      whisper: "gm",
      ...SWData.RT_OPTIONS
    });

    if (updateAttrs.size > 0)
      setAttrs(Object.fromEntries(updateAttrs));
  });
}

/**
 * Handle PV change buttons
 * @param {string} button Name of action button
 */
function changeVP(button) {
  let prompt = (button === "vigloss-btn") ? "PV perdus ?" : "PV soignés ?";
  let lossOrGain = (button === "vigloss-btn") ? -1 : +1;
  //const ask = `!{{ask=[[?{${prompt}}]]}}`;
  askValue(prompt, function(vp) {
    if (vp <= 0) return;
    updatePVDR(vp, lossOrGain);
  });
}

/**
 * On PV change action buttons
 */
on("clicked:vigloss-btn clicked:vigheal-btn", function (eventInfo) {
  const [ , button ] = eventInfo.triggerName.split(":");
  changeVP(button);
});

/**
 * On PV value change
 */
on("change:pv", function (eventInfo) {
  if (eventInfo.sourceType === "sheetworker")
    return;

  const oldPV = intval(eventInfo.previousValue);
  const newPV = intval(eventInfo.newValue);
  const vp = oldPV > newPV ? oldPV - newPV : newPV - oldPV;
  const lossOrGain = oldPV > newPV ? -1 : +1;
  //updatePVDR(vp, lossOrGain, false);
});

/**
 * On Recup button click
 */
on("clicked:drecup-btn", function() {
  getAttrs([ "dr", "drecup", "niveau", "pv", "pv_max" ], function(values) {
    let dr = intval(values.dr);
    if (dr === 0) {
      const chatMsg = cof2RollTemplate({
        lsub: "Jet",
        rsub: "Récupération Rapide",
        text: "Plus de Dé de Récupération !",
        textclass: "fumble"
      });
      sendChatMsg(chatMsg);
      return;
    }

    const pvMax = intval(values.pv_max);
    let pv = intval(values.pv);
    if (pv === pvMax) {
      const chatMsg = cof2RollTemplate({
        lsub: "Jet",
        rsub: "Récupération Rapide",
        text: "@{character_name} est déjà à son maximum de PV !",
      });
      sendChatMsg(chatMsg);
      return;
    }

    dr -= 1;
    const dRecup = `d${values.drecup}`;
    const bRecup = Math.ceil(intval(values.niveau) / 2);
    const recup = `[[${dRecup}[DR] + ${bRecup}[Niveau/2] ]] PV récupérés`;
    const chatMsg = cof2RollTemplate({
      lsub: "Jet",
      rsub: "Récupération Rapide",
      roll: recup,
      text: `${dr} DR restants`
    });
    const chatCmd = buildChatMsg(chatMsg);
    startRoll(chatCmd, roll => {
      pv += roll.results.roll.result;
      pv = Math.min(pv, pvMax);
      finishRoll(roll.rollId);
      setAttrs({ dr, pv });
    });
  });
});

/**
 * Update the def attribute
 */
function updateDef() {
  getAttrs(SWData.PC.COMBAT.def, function(values) {
    let def = 10;
    def += intval(values.armure) * intval(values.armure_eqp);
    def += intval(values.bouclier) * intval(values.bouclier_eqp);
    def += intval(values.agi);
    def += intval(values.def_buff);
    def += intval(values.def_action);
    setAttrs({ def });
  });
}

/**
 * On Init components change
 */
on(eventList("change", SWData.PC.COMBAT.def, " "), updateDef);

/**
 * On Luck button click
 */
on("clicked:luck-btn", function() {
  getAttrs([ "pc", "last_rolls" ], function(values) {
    let pc = intval(values.pc);
    if (pc === 0) {
      const chatMsg = cof2RollTemplate({
        lsub: "Jet",
        rsub: "Chance",
        text: "Plus de Points de Chance !",
        textclass: "fumble"
      });
      sendChatMsg(chatMsg);
      return;
    }

    pc -= 1;
    const [ last_roll, last_broll ] = strval(values.last_rolls).split("|");
    let roll = "[[10" + (last_roll !== "" ? ` + ${last_roll} ` : "" ) + "]]";
    if (last_broll)
      roll += " | [[10" + ` + ${last_broll} ` + "]]";
    const chatMsg = cof2RollTemplate({
      lsub: "Jet",
      rsub: "Chance",
      roll,
      text: `${pc} Points de Chance restants`,
      save: "[[0]]"
    });
    sendChatMsg(chatMsg);
    setAttrs({ pc });
  });
});

/**
 * Roll evolutive die
 */
on("clicked:devol-btn", function() {
    askValue("Nombre de dés ?", function(dice) {
    const chatMsg = cof2RollTemplate({
      lsub: "Jet",
      rsub: "Dé évolutif",
      roll: `[[${dice}@{devol}]]`
    });
    sendChatMsg(chatMsg);
  });
});

/**
 * Return a Map of attribute buffs values
 * @param {number} hasCondition - set/unset condition flag
 * @param {object} effects - key/value pairs of attributes and debuffs
 * @param {string[]} buffs - list of attribute names
 * @param {object} values - list of attribute values as returned by getAttrs()
 * @returns {Map}
 */
function setCondition(hasCondition, effects, buffs, values) {
  const attributes = new Map();
  const toggle = hasCondition === 1 ? +1 : -1;
  buffs.forEach(buff => {
    const [ attribute ] = buff.split("_");
    const newValue = intval(values[buff]) + toggle * effects[attribute];
    attributes.set(buff, newValue);
  });
  return attributes;
}

/**
 * Return attack name given attribute name
 * @param {string} attribute - attack score attribute
 * @returns {string}
 */
function getAttackName(attribute) {
  const found = SWData.PC.COMBAT.attacks.find(attack => {
    const [ atkAttr ] = attack;
    return atkAttr === attribute;
  });
  if (!found)
    return "";
  const [ , , name ] = found;
  return name;
}

/**
 * Display a chat message with a condition effects
 * @param {string} label - Condition name
 * @param {object} effects - key/value pairs of attributes and mods
 * @param {string[]} description - list of additional effects
 */
function displayCondition(label, effects, description) {
  const malus = [];
  Object.keys(effects).forEach(attribute => {
    let name = "";
    switch (attribute) {
      case "init":
        name = "Initiative";
        break;
      case "def":
        name = "Défense";
        break;
      default:
        name = "Attaque " + getAttackName(attribute);
        break;
    }
    malus.push(`${effects[attribute]} en ${name}`);
  });
  text = [ "@{character_name} subit les effets suivants :", ...malus, ...description ].join("\n");
  const chatMsg = cof2RollTemplate({
    lsub: "Condition",
    rsub: label,
    text
  });
  sendChatMsg(chatMsg);
}

/**
 * Update condition attributes & buffs
 */
SWData.PC.CONDITIONS.forEach(condition => {
  const { name, label, effects, description } = condition;

  // Set/Unset conditions
  on(`clicked:${name}-icon`, function () {
    const buffs = Object.entries(effects).map(([ attribute ]) => `${attribute}_buff`);
    getAttrs([ `condition_${name}`, ...buffs ], function(values) {
      const [ attribute, ...buffs ] = Object.keys(values);
      const hasCondition = 1 - intval(values[attribute]);
      const updateAttrs = setCondition(hasCondition, effects, buffs, values);
      updateAttrs.set(attribute, hasCondition);
      setAttrs(Object.fromEntries(updateAttrs));
    });
  });

  // Display enabled condition
  on(`change:condition_${name}`, function() {
    getAttrs([ `condition_${name}` ], function(value) {
      const [ attribute ] = Object.keys(value);
      const hasCondition = intval(value[attribute]);
      if (hasCondition === 1) 
        displayCondition(label, effects, description);
    });
  });
});

/**
 * Return matches for pattern in text
 * @param {string} text - text to match
 * @param {RegExp} pattern - regular expression
 * @returns {string[]}
 */
function matchRegExp(text, pattern) {
  return [ ...text.matchAll(pattern) ];
}

/**
 * Substitute expressions with in-line rolls
 * @param {string} text - text to process
 * @returns {string}
 */
function insertRolls(text) {
  if (!text)
    return "";
  
  // Search for " [#d4° + XXX] "
  matchRegExp(text, /([ ]*)\[([1-9])d4°[ ]*\+[ ]*(AGI|CON|FOR|PER|CHA|INT|VOL)\]([ ]*)/gm).forEach(result => {
    const [ matched, sb, dice, ability, sa ] = result;
    const replace = `${sb}[[${dice}@{devol} + @{${ability.toLowerCase()}}[${ability}] ]]${sa}`;
    text = text.replace(matched, replace)
  });

  // Search for "... #d4° ..."
  matchRegExp(text, /([ ]*)([1-9])d4°([ ])*/gm).forEach(result => {
    const [ matched, sb, dice, sa ] = result;
    const replace = `${sb}[[${dice}@{devol}]]${sa}`;
    text = text.replace(matched, replace)
  });

  // Search for " [# + XXX] "
  matchRegExp(text, /([ ]*)\[([0-9]+)[ ]*\+[ ]*(AGI|CON|FOR|PER|CHA|INT|VOL)\]([ ]*)/gm).forEach(result => {
    const [ matched, sb, value, ability, sa ] = result;
    const replace = `${sb}[[${value} + @{${ability.toLowerCase()}}]]${sb}`;
    text = text.replace(matched, replace)
  });

  return text;
}

/**
 * Roll an attack in chat
 */
on("clicked:repeating_armes:attack-btn", function() {
  const section = "repeating_armes_arme-"
  const attackAttrs = [
    "nom",
    "atk",
    "atkdiv",
    "crit",
    "dm",
    "dmtype",
    "bonus",
    "dmdiv",
    "portee",
    "special"
  ];
  getAttrs(attackAttrs.map(attribute => `${section}${attribute}`), function (values) {
    const atk = strval(values[section + "atk"]);
    const atkdiv = intval(values[section + "atkdiv"]);
    const name = capitalize(strval(values[section + "nom"], getAttackName(atk)));
    const portee = strval(values[section + "portee"]);
    const range = (portee !== "") ? ` (${portee})` : "";
    const crit = intval(values[section + "crit"], 20);
    let attack = "";
    if (atk !== "0")
      attack = `[[1d20cs>${crit}cf1[Dé] + @{${atk}}[Bonus] + ${atkdiv}[Divers] ]]`;
    
    let [ dm, ...dmextra ] = strval(values[section + "dm"]).split(" ");
    dm = dm.replace("d4°", "@{devol}");
    const dmtype = strval(values[section + "dmtype"]);
    const dmdesc = [ dmtype, ...dmextra ].join(" ").trim();
    const dmbonus = strval(values[section + "bonus"]);
    const dmdiv = strval(values[section + "dmdiv"]);
    let dmroll = "";
    if (dm !== "" )
      dmroll = `[[[[${dm}]][DM] + ${dmbonus}[Bonus] + ${dmdiv}[Divers] ]]`;
    
    const special = insertRolls(strval(values[section + "special"]));

    const chatMsg = cof2RollTemplate({
      lsub: "Attaque",
      rsub: name + range,
      roll: attack,
      broll: attack,
      dm: dmroll,
      dmdesc,
      text: special
    });
    sendChatMsg(chatMsg);
  })
});

/**
 * Display ability text with alert on usage
 * @param {number} path - Path #
 * @param {number} rank - Rank #
 */
function actionAbility(path, rank) {
  const abilityAttrs = [
    `voie${path}nom`,
    `voie${path}-t${rank}`,
    `voie${path}-${rank}`,
    `v${path}r${rank}`,
    `v${path}r${rank}_use`,
    `v${path}r${rank}_use_max`,
    `v${path}r${rank}_freq`
  ];
  getAttrs(abilityAttrs, function(values) {
    const [ path, ability, desc, owned, used, uses, freq ] = Object.keys(values);
    const pathName = strval(values[path]);
    const abilityName = strval(values[ability]);
    const abilityOwned = intval(values[owned]);
    let description = strval(values[desc]);
    if (abilityName === "")
      return;

    const nbUsed = intval(values[used]) + 1;
    const maxUses = intval(values[uses]);
    const usage = strval(values[freq]);
    let textclass = "";

    // alert on usage
    let alert = "";
    if (maxUses !== 0) {
      if (nbUsed > maxUses) {
        alert = `Déjà utilisée ${maxUses} fois / ${usage.toLowerCase()}`;
        description = "";
        textclass = "critical";
      } else {
        alert = `Utilisée ${nbUsed} fois`;
      }
    }

    // build text
    let text = insertRolls(description);
    if (alert !== "")
      text += "\n" + alert

    // send to chat
    const chatMsg = cof2RollTemplate({
      lsub: pathName,
      rsub: `${rank} - ${abilityName}`,
      text,
      textclass
    });
    sendChatMsg(chatMsg);
    
    // Update usages
    if (nbUsed <= maxUses)
      setAttrs({ [used]: nbUsed });
  });
}

/**
 * Update rank in path
 * @param {number} path - Path #
 */
function setRank(path) {
  rankAttrs = seq(5).map(rank => `v${path}r${rank}`);
  getAttrs(rankAttrs, function (values) {
    let rank = 0;
    Object.keys(values).forEach(ability => {
      const owned = intval(values[ability]);
      const hasRank = intval(ability.charAt(ability.length - 1)) * owned;
      if (hasRank > rank)
        rank = hasRank;
    });
    setAttrs({ [`rang_voie${path}`]: rank });
  });
}

/**
 * Update the all ranks attribute
 * @param {number} path - path number changed
 */
function updateAllRanks(path) {
  getAttrs([ `rang_voie${path}`, "rangs_voies" ], function(values) {
    const [ rankPath ] = Object.keys(values);
    const rank = intval(values[rankPath]);
    const ranks = strval(values.rangs_voies);
    let allRanks = Array(9);
    if (ranks !== "")
      allRanks = ranks.split(",").map(r => intval(r));
    allRanks[path - 1] = rank;
    setAttrs({ rangs_voies: allRanks.join(",") });
  });
}

/**
 * Abilities
 */
seq(9).forEach(path => {
  seq(5).forEach(rank => {
    
    // Handle ability buttons click
    on(`clicked:v${path}r${rank}-btn`, function() {
      actionAbility(path, rank);
    });

    // Update rank in path
    on(`change:v${path}r${rank}`, function() {
      setRank(path);
    });
  });

  // Update all ranks attribute
  on(`change:rang_voie${path}`, function () {
    updateAllRanks(path);
  });
});

/**
 * Rebuild buffable attributes xxx_buff_list
 */
function rebuildBuffLists() {
  getSectionIDs("buffs", function (rowIds) {
    const buffs = Object.fromEntries(new Map(
      SWData.PC.BUFFS.To.map(attr => [ `${attr}_buff_list`, "" ])
    ));
    const allBuffs = [];
    rowIds.forEach(id => {
      [ "on", "nom", "attrib", "value" ]
        .map(attr => `repeating_buffs_${id}_buff-${attr}`)
        .forEach(a => {
        allBuffs.push(a);
      });
    });
    getAttrs(allBuffs, function(values) {
      rowIds.forEach(id => {
        const rowId = `repeating_buffs_${id}_buff-`;
        const enabled = intval(values[`${rowId}on`]);
        const name = strval(values[`${rowId}nom`]);
        const attribute = `${strval(values[`${rowId}attrib`])}_buff_list`;
        const value = strval(values[`${rowId}value`]);
        if (enabled === 1) {
          const buffList = buffs[attribute] + `${name} : ${value}; `;
          buffs[attribute] = buffList;
        }
      });
      setAttrs(buffs);
    });
  });
}

/**
 * On change of repeating buffs
 */
on("change:repeating_buffs remove:repeating_buffs", function () {
  rebuildBuffLists();
});

/**
 * Parse an attribute's list of buffs (stored in xxx_buff_list)
 * @param {string} attribute - attribute name 
 */
function parseBuffList(attribute) {
  getAttrs([ `${attribute}_buff_list`, ...SWData.PC.BUFFS.From ], function(values) {
    const [ buff ] = Object.keys(values);
    const buffList = strval(values[buff]).split("; ");
    const allRanks = values.rangs_voies.split(",");
    let buffTotal = 0;
    buffList.forEach(buff => {
      if (buff.trim() === "")
        return;
      let value = 0;
      const [ , expression ] = buff.split(":").map(e => e.trim());
      const attrBuff = SWData.PC.BUFFS.From.find(a => `[${a}]` === expression.toLowerCase());
      if (attrBuff) {
        value = intval(values[attrBuff]);
      } else {
        const [ matched, path ] = expression.match(/rang[ ]*voie[ ]*([1-9])/i);
        if (matched && intval(path) > 0) {
          value = intval(allRanks[intval(path) - 1]); 
        } else {
          if (expression.startsWith("!")) {
            try {
              value = intval(eval(expression.slice(1)));
            } catch (ex) {
              clog("Erreur JS");
            }
          } else {
            value = intval(expression);
          }
        }
      } 
      buffTotal += value;
    });
    setAttrs({ [`${attribute}_buff`]: buffTotal });
  });
}

/**
 * On change of a list of buffs
 */
SWData.PC.BUFFS.To.forEach(attribute => {
  on(`change:${attribute}_buff_list`, function() {
    parseBuffList(attribute);
  });
});

/**
 * On opening the sheet
 */
on("sheet:opened", function() {
  getAttrs(["agi_buff_list"], function(v) {
    console.log(v);
  });
});

/**
 * Show weapons options
 * 
on("clicked:repeating_armes:arme-opt-btn", function() {
  getAttrs([ "repeating_armes_arme-opt" ], function(value) {
    let [ option ] = Object.values(value);
    option = 1 - intval(option);
    setAttrs( { ["repeating_armes_arme-opt"]: option });
  });
}); */
