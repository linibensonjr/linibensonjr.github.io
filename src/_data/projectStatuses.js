const projects = require("./projects.json");

module.exports = () => {
  const seen = new Set();
  projects.forEach((p) => seen.add(p.status.split("-")[0].trim()));
  return [...seen];
};
