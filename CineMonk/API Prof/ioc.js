

import SessaoDatabase from "./src/database/sessionDatabase.js";


export default function setIoc(conn) {
    SessaoDatabase.inject(conn);
}


