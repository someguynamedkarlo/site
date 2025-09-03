import "./globals.css";
export default function Home() {
  return (
    <>
      <div id="e">
        <form action="">
          <label htmlFor="sisanje">Odabir usluge</label>
          <select id="sisanje" title="sisanje">
            <option value="volvo">Obično šišanje 10€</option>
            <option value="saab">Šišanjanje i fade 15€</option>
            <option value="fiat">(moze pisat sta god ovdje)</option>
          </select>
          <label htmlFor="">Podatci za narudžbu</label>
          <input placeholder="Ime"></input>
          <input placeholder="Broj mobitela" type="tel"></input>
        </form>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Odabir termina
        </button>
      </div>
    </>
  );
}
