import { GoogleGenAI } from "@google/genai";
import { gemini_API_key } from "./constants";

const ai = new GoogleGenAI({ apiKey: gemini_API_key });

export default ai;
