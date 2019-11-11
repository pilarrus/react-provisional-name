const config = {
  aemet: {
    urltemperature: "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria",
    urlmountain: "https://opendata.aemet.es/opendata/api/prediccion/especifica/montaña/pasada/area",
    apiKey: process.env.REACT_APP_AEMET_APIKEY || "invalid api key"
  }
}

export default config;