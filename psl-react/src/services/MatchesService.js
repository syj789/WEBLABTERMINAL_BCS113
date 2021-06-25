import GenericService from "./GenericService";
class MatchesService extends GenericService {
  constructor() {
    super();
  }
  addMatch = (data) => this.post("matches", data);
  deleteMatch = (_id) => this.delete("matches/" + _id);
  updatMatch = (_id, data) => this.put("matches/" + _id, data);
  getMatches = (page = 1, perPage = 10) =>
    this.get("matches?page=" + page + "&perPage=" + perPage);
  getSingleMatch = (id) => this.get("matches/" + id);
}

let matchService = new MatchesService();
export default matchService;
