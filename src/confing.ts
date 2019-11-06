const config = {
  aemet: {
    url: "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria",
    apiKey: process.env.REACT_APP_AEMET_APIKEY || "invalid api key"
  }
}


export default config;