const loggerDetchConfig = { serverId: 3987, active: true };

const loggerDetchHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_3987() {
    return loggerDetchConfig.active ? "OK" : "ERR";
}

console.log("Module loggerDetch loaded successfully.");