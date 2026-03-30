module.exports = {
  stylesheet: ["pdf-configs/style.css"],
  body_class: "markdown-body",
  launch_options: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  pdf_options: {
    format: "A4",
    margin: {
      top: "20mm",
      bottom: "20mm",
      right: "20mm",
      left: "20mm",
    },
    printBackground: true,
  },
};
