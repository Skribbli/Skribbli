const PROFILE_SCHEMA = [
  { key: "ServerName", label: "Server Name", type: "text", default: "Palworld Server" },
  { key: "ServerDescription", label: "Description", type: "text", default: "Hosted with local editor" },
  { key: "AdminPassword", label: "Admin Password", type: "text", default: "" },
  { key: "ServerPassword", label: "Server Password", type: "text", default: "" },
  { key: "PublicIP", label: "Public IP", type: "text", default: "" },
  { key: "PublicPort", label: "Public Port", type: "number", min: 1, max: 65535, step: 1, default: 8211 },
  { key: "RCONEnabled", label: "RCON Enabled", type: "boolean", default: false },
  { key: "RCONPort", label: "RCON Port", type: "number", min: 1, max: 65535, step: 1, default: 25575 },
];

const SETTING_SCHEMA = [
  { key: "Difficulty", label: "Difficulty", type: "select", options: ["None", "Easy", "Normal", "Hard"], default: "None", help: "Overall world preset." },
  { key: "DayTimeSpeedRate", label: "Day Time Speed", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Higher means daytime passes faster." },
  { key: "NightTimeSpeedRate", label: "Night Time Speed", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Higher means nights pass faster." },
  { key: "ExpRate", label: "Experience Multiplier", type: "range", min: 0.1, max: 20, step: 0.1, default: 1, help: "XP gain for players." },
  { key: "PalCaptureRate", label: "Pal Capture Rate", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Chance to capture pals." },
  { key: "PalSpawnNumRate", label: "Pal Spawn Rate", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "How many pals appear in the world." },
  { key: "PalDamageRateAttack", label: "Pal Attack Damage", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Damage dealt by pals." },
  { key: "PalDamageRateDefense", label: "Pal Defense", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Damage taken by pals." },
  { key: "PlayerDamageRateAttack", label: "Player Attack Damage", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Damage dealt by players." },
  { key: "PlayerDamageRateDefense", label: "Player Defense", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Damage taken by players." },
  { key: "PlayerStomachDecreaceRate", label: "Player Hunger Drain", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "How quickly hunger decreases." },
  { key: "PlayerAutoHPRegeneRate", label: "Player HP Regen", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "HP regeneration outside combat." },
  { key: "PlayerAutoHpRegeneRateInSleep", label: "Sleep HP Regen", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "HP regen while sleeping." },
  { key: "PalStomachDecreaceRate", label: "Pal Hunger Drain", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "How quickly pal hunger decreases." },
  { key: "PalAutoHPRegeneRate", label: "Pal HP Regen", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "Pal HP regeneration outside battle." },
  { key: "PalAutoHpRegeneRateInSleep", label: "Pal Sleep HP Regen", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "Pal HP regeneration while resting." },
  { key: "BuildObjectDamageRate", label: "Structure Damage Taken", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "Damage multiplier against player structures." },
  { key: "BuildObjectDeteriorationDamageRate", label: "Structure Decay Rate", type: "range", min: 0, max: 5, step: 0.1, default: 1, help: "How quickly structures decay." },
  { key: "CollectionDropRate", label: "Gathering Yield", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Amount collected from resources." },
  { key: "CollectionObjectHpRate", label: "Resource Node Health", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "How hard it is to break nodes." },
  { key: "CollectionObjectRespawnSpeedRate", label: "Resource Respawn Speed", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "How fast resources come back." },
  { key: "EnemyDropItemRate", label: "Enemy Drop Rate", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Loot dropped by enemies." },
  { key: "DeathPenalty", label: "Death Penalty", type: "select", options: ["None", "Item", "ItemAndEquipment", "All"], default: "All", help: "What players lose when they die." },
  { key: "bEnablePlayerToPlayerDamage", label: "Friendly Fire", type: "boolean", default: false, help: "Allow players to damage each other." },
  { key: "bEnableFriendlyFire", label: "Enable Friendly Fire Rule", type: "boolean", default: false, help: "Server-level friendly fire flag." },
  { key: "bEnableInvaderEnemy", label: "Enable Base Raids", type: "boolean", default: true, help: "Turn random base invasions on/off." },
  { key: "bActiveUNKO", label: "Enable Dropped Loot Persistence", type: "boolean", default: false, help: "Controls waste-related dropped objects." },
  { key: "bEnableAimAssistPad", label: "Gamepad Aim Assist", type: "boolean", default: true, help: "Aim assist for controllers." },
  { key: "bEnableAimAssistKeyboard", label: "Keyboard Aim Assist", type: "boolean", default: false, help: "Aim assist for mouse/keyboard." },
  { key: "DropItemMaxNum", label: "Max Ground Items", type: "number", min: 10, max: 10000, step: 1, default: 3000, help: "Maximum dropped item stacks in world." },
  { key: "DropItemMaxNum_UNKO", label: "Max Dropped Waste", type: "number", min: 10, max: 10000, step: 1, default: 100, help: "Maximum waste dropped objects." },
  { key: "BaseCampMaxNum", label: "Max Bases Per Guild", type: "number", min: 1, max: 20, step: 1, default: 4, help: "Number of bases one guild can build." },
  { key: "BaseCampWorkerMaxNum", label: "Max Workers Per Base", type: "number", min: 1, max: 100, step: 1, default: 15, help: "How many pals can work in one base." },
  { key: "DropItemAliveMaxHours", label: "Dropped Item Lifetime (Hours)", type: "range", min: 0.1, max: 48, step: 0.1, default: 1, help: "How long dropped items stay." },
  { key: "bAutoResetGuildNoOnlinePlayers", label: "Auto-Reset Empty Guilds", type: "boolean", default: false, help: "Reset guilds with no active members." },
  { key: "AutoResetGuildTimeNoOnlinePlayers", label: "Guild Reset Delay (Hours)", type: "number", min: 1, max: 168, step: 1, default: 72, help: "Time before empty guild reset." },
  { key: "GuildPlayerMaxNum", label: "Guild Player Limit", type: "number", min: 1, max: 50, step: 1, default: 20, help: "Maximum players in a guild." },
  { key: "PalEggDefaultHatchingTime", label: "Egg Hatch Time", type: "range", min: 0, max: 72, step: 0.1, default: 72, help: "Hours needed for default egg hatching." },
  { key: "WorkSpeedRate", label: "Work Speed Multiplier", type: "range", min: 0.1, max: 5, step: 0.1, default: 1, help: "Speeds up crafting and work tasks." },
  { key: "bIsMultiplay", label: "Multiplayer Enabled", type: "boolean", default: true, help: "Turn multiplayer on or off." },
  { key: "bIsPvP", label: "PvP Enabled", type: "boolean", default: false, help: "Enable player-vs-player mode." },
  { key: "bCanPickupOtherGuildDeathPenaltyDrop", label: "Loot Other Guild Death Drops", type: "boolean", default: false, help: "Allow looting other guild's death bags." },
  { key: "bEnableNonLoginPenalty", label: "Offline Penalty", type: "boolean", default: true, help: "Apply penalties to offline players." },
  { key: "bEnableFastTravel", label: "Fast Travel", type: "boolean", default: true, help: "Allow fast travel statues." },
  { key: "bIsStartLocationSelectByMap", label: "Map Start Selection", type: "boolean", default: true, help: "Allow selecting spawn location on map." },
  { key: "bExistPlayerAfterLogout", label: "Keep Character After Logout", type: "boolean", default: false, help: "Player body remains after logout." },
  { key: "bEnableDefenseOtherGuildPlayer", label: "Protect Against Other Guilds", type: "boolean", default: false, help: "Defense option for other guild players." },
  { key: "CoopPlayerMaxNum", label: "Co-op Player Limit", type: "number", min: 1, max: 32, step: 1, default: 4, help: "Players allowed in co-op session." },
  { key: "ServerPlayerMaxNum", label: "Server Player Limit", type: "number", min: 1, max: 100, step: 1, default: 32, help: "Players allowed on server at once." },
  { key: "ServerReplicatePawnCullDistance", label: "Replication Cull Distance", type: "number", min: 1000, max: 30000, step: 100, default: 15000, help: "Network replication distance for actors." },
  { key: "bUseAuth", label: "Use Authentication", type: "boolean", default: true, help: "Use Steam authentication." },
  { key: "BanListURL", label: "Ban List URL", type: "text", default: "https://api.palworldgame.com/api/banlist.txt", help: "Remote ban list path." },
];

const profileContainer = document.getElementById("serverProfile");
const settingsGrid = document.getElementById("settingsGrid");
const outputArea = document.getElementById("outputArea");
const searchInput = document.getElementById("searchInput");
const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadBtn");
const settingCardTemplate = document.getElementById("settingCardTemplate");

const profileValues = Object.fromEntries(PROFILE_SCHEMA.map((field) => [field.key, field.default]));
const settingValues = Object.fromEntries(SETTING_SCHEMA.map((setting) => [setting.key, setting.default]));

function normalizeValue(definition, value) {
  if (definition.type === "boolean") {
    return value === true || value === "True" || value === "true";
  }

  if (definition.type === "range" || definition.type === "number") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
    return definition.default;
  }

  return value ?? definition.default;
}

function createInput(definition, store) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.className = "field-name";
  label.textContent = definition.label;

  let input;

  if (definition.type === "boolean") {
    input = document.createElement("select");
    ["False", "True"].forEach((choice) => {
      const option = document.createElement("option");
      option.value = choice;
      option.textContent = choice;
      input.appendChild(option);
    });
    input.value = store[definition.key] ? "True" : "False";
  } else if (definition.type === "select") {
    input = document.createElement("select");
    definition.options.forEach((choice) => {
      const option = document.createElement("option");
      option.value = choice;
      option.textContent = choice;
      input.appendChild(option);
    });
    input.value = String(store[definition.key]);
  } else {
    input = document.createElement("input");
    input.type = definition.type === "range" ? "range" : definition.type;
    if (definition.min !== undefined) input.min = definition.min;
    if (definition.max !== undefined) input.max = definition.max;
    if (definition.step !== undefined) input.step = definition.step;
    input.value = String(store[definition.key]);
  }

  const valueBadge = definition.type === "range" ? document.createElement("span") : null;
  if (valueBadge) {
    valueBadge.className = "range-value";
    valueBadge.textContent = `Current: ${input.value}`;
  }

  input.addEventListener("input", () => {
    let nextValue;
    if (definition.type === "boolean") {
      nextValue = input.value === "True";
    } else if (definition.type === "range" || definition.type === "number") {
      nextValue = Number(input.value);
    } else {
      nextValue = input.value;
    }

    store[definition.key] = nextValue;

    if (valueBadge) {
      valueBadge.textContent = `Current: ${input.value}`;
    }

    updateOutput();
  });

  wrapper.append(label, input);
  if (valueBadge) wrapper.appendChild(valueBadge);
  return wrapper;
}

function buildProfilePanel() {
  profileContainer.innerHTML = "";
  PROFILE_SCHEMA.forEach((field) => {
    const inputField = createInput(field, profileValues);
    profileContainer.appendChild(inputField);
  });
}

function buildSettingsPanel() {
  settingsGrid.innerHTML = "";
  SETTING_SCHEMA.forEach((setting) => {
    const card = settingCardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.key = setting.key;

    card.querySelector("h3").textContent = setting.label;
    card.querySelector("p").textContent = `${setting.key} • ${setting.help ?? ""}`;

    const inputSlot = card.querySelector(".setting-input");
    inputSlot.appendChild(createInput(setting, settingValues));

    settingsGrid.appendChild(card);
  });
}

function escapeQuotedString(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function toIniValue(definition, value) {
  if (definition.type === "boolean") {
    return value ? "True" : "False";
  }

  if (definition.type === "text" || definition.type === "select") {
    return `\"${escapeQuotedString(value)}\"`;
  }

  return Number.isInteger(value) ? `${value}` : `${Number(value).toFixed(2).replace(/\.00$/, "")}`;
}

function buildOptionSettingsString() {
  const entries = SETTING_SCHEMA.map((setting) => `${setting.key}=${toIniValue(setting, settingValues[setting.key])}`);
  return entries.join(",");
}

function updateOutput() {
  const lines = ["[/Script/Pal.PalGameWorldSettings]", "OptionSettings=("]; 
  const profileEntries = PROFILE_SCHEMA.map((field) => `    ${field.key}=${toIniValue(field, profileValues[field.key])}`);

  const optionsLine = `    ${buildOptionSettingsString()}`;
  lines.push(profileEntries.join(",\n"));
  lines.push(",");
  lines.push(optionsLine);
  lines.push(")");

  outputArea.value = lines.join("\n");
}

function parseOptionSettings(optionLine) {
  const content = optionLine.replace(/^OptionSettings=\(/, "").replace(/\)\s*$/, "");
  const pairs = [];
  let current = "";
  let inQuotes = false;

  for (const char of content) {
    if (char === '"') {
      inQuotes = !inQuotes;
      current += char;
      continue;
    }

    if (char === "," && !inQuotes) {
      pairs.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  if (current.trim()) pairs.push(current.trim());

  const result = {};
  for (const pair of pairs) {
    const [key, ...valueParts] = pair.split("=");
    if (!key || !valueParts.length) continue;
    const rawValue = valueParts.join("=").trim();
    result[key.trim()] = rawValue;
  }
  return result;
}

function applyIniContent(content) {
  const optionMatch = content.match(/OptionSettings=\(([^]*?)\)/m);

  PROFILE_SCHEMA.forEach((field) => {
    const profileRegex = new RegExp(`${field.key}="([^"]*)"`);
    const match = content.match(profileRegex);
    if (match) profileValues[field.key] = normalizeValue(field, match[1]);
  });

  if (optionMatch) {
    const parsed = parseOptionSettings(`OptionSettings=(${optionMatch[1]})`);
    SETTING_SCHEMA.forEach((setting) => {
      if (parsed[setting.key] === undefined) return;
      const raw = parsed[setting.key];
      const cleaned = raw.replace(/^"|"$/g, "");
      settingValues[setting.key] = normalizeValue(setting, cleaned);
    });
  }

  buildProfilePanel();
  buildSettingsPanel();
  updateOutput();
}

function filterSettings(term) {
  const needle = term.trim().toLowerCase();
  [...settingsGrid.children].forEach((card) => {
    const label = card.querySelector("h3").textContent.toLowerCase();
    const meta = card.querySelector("p").textContent.toLowerCase();
    const visible = !needle || label.includes(needle) || meta.includes(needle);
    card.classList.toggle("hidden", !visible);
  });
}

fileInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  const text = await file.text();
  applyIniContent(text);
});

searchInput.addEventListener("input", (event) => {
  filterSettings(event.target.value);
});

downloadBtn.addEventListener("click", () => {
  const blob = new Blob([outputArea.value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "PalWorldSettings.ini";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
});

buildProfilePanel();
buildSettingsPanel();
updateOutput();
