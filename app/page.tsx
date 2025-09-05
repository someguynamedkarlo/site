"use client";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [service, setService] = useState("obicno");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const allFilled =
    service.trim() !== "" &&
    name.trim() !== "" &&
    surname.trim() !== "" &&
    phone.trim() !== "";

  function navigateToTermin() {
    if (allFilled) {
      router.push("/termin");
    } else {
      alert("Molimo ispunite sve podatke prije nastavka.");
    }
  }
  return (
    <>
      <div id="e">
        <form action="">
          <label htmlFor="sisanje">Odabir usluge</label>
          <select
            id="sisanje"
            title="sisanje"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="obicno">Obično šišanje 10€</option>
            <option value="fade">Šišanje i fade 15€</option>
            <option value="nesto">(moze pisat sta god ovdje)</option>
          </select>
          <label htmlFor="">Podatci za narudžbu</label>
          <input
            placeholder="Ime"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Prezime"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          <input
            placeholder="Broj mobitela"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </form>

        <button
          onClick={navigateToTermin}
          type="button"
          className="text-black bg-[#b6931f] hover:bg-[#a3831a] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Odabir termina
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
