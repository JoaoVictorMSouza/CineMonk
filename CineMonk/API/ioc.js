import SessaoDatabase from "./src/database/sessionDatabase.js";
import seatDatabase from './src/database/seatDatabase.js'

export default function setIoc(conn) {
    SessaoDatabase.inject(conn);
    seatDatabase.inject(conn);
}