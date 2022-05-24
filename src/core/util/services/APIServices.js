import axios from "axios";

export class APIService {
  #http;
  #baseUrl;
  #apiSection;

  constructor(baseUrl, path) {
    this.#baseUrl = baseUrl;
    this.#apiSection = path;
    this.#http = axios.create({
      baseURL: this.#baseUrl,
    });
  }
  getAll(params) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Cache-Control":
        "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    };
    return this.#http.get(this.#apiSection, { headers, params });
  }
  create(data) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return this.#http.post(this.#apiSection, data, { headers });
  }

  get http() {
    return this.#http;
  }

  get baseUrl() {
    return this.#baseUrl;
  }

  set apiSection(path) {
    this.#apiSection = path;
  }
}
