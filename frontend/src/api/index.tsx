import axios from "axios";
import { EventType } from "../types";

const api = axios.create({ baseURL: "https://orangehackathon.onrender.com1"})

export const listEvents = async () => {
  const resp = await api.get("/event")
  return resp.data;
}

export const requestEventById = async (eventid: string) => {
  const resp = await api.get(`/event/${eventid}`)
  return resp.data;
}

export const login = async (data: {email:string, password:string}) => {
  const resp = await api.post("/login", data)
  return resp.data;
}

export const registerUser = async (data: {name: string, email:string, password:string}) => {
  const resp = await api.post("/register", data)
  return resp.data;
}

export const registerEvent = async (data: EventType) => {
  const resp = await api.post("/event", data)
  return resp.data;
}

export default api;