"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  FaGift,
  FaSleigh,
  FaTrash,
  FaDownload,
  FaUpload,
} from "react-icons/fa";
import Head from "next/head";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

interface Participant {
  username: string;
  email: string;
  wishlist: string;
  budget: string;
}

interface CSVRow {
  Name?: string;
  Email?: string;
  Wishlist?: string;
  Budget?: string;
}

export default function Participants() {
  const router = useRouter();
  const params = useParams();
  const t = useTranslations('participants');
  const commonT = useTranslations('common');

  const [participants, setParticipants] = useState<Participant[]>([
    { username: "user1", email: "user1@example.com", wishlist: "", budget: "" },
  ]);

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [wishlist, setWishlist] = useState("");
  const [budget, setBudget] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fixedBudget, setFixedBudget] = useState(true);
  const [globalBudget, setGlobalBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUsername && newEmail) {
      setParticipants([
        ...participants,
        {
          username: newUsername,
          email: newEmail,
          wishlist: wishlist,
          budget: fixedBudget ? globalBudget : budget,
        },
      ]);
      setNewUsername("");
      setNewEmail("");
      setWishlist("");
      if (!fixedBudget) {
        setBudget("");
      }
    }
  };

  const handleDelete = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const downloadTemplate = () => {
    const csvContent =
      "Name,Email,Wishlist,Budget\nJohn Doe,john@example.com,Xbox games,$50\nJane Smith,jane@example.com,Books,$50";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "secret_santa_template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const parsedParticipants = (results.data as CSVRow[])
            .map((row) => ({
              username: row.Name || "",
              email: row.Email || "",
              wishlist: row.Wishlist || "",
              budget: row.Budget || (fixedBudget ? globalBudget : ""),
            }))
            .filter((p) => p.username && p.email);
          setParticipants(parsedParticipants);
        },
      });
    },
    [fixedBudget, globalBudget]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
  });

  const assignSecretSanta = async () => {
    if (participants.length < 2) {
      alert("You need at least 2 participants to start the exchange.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          participants,
          locale: params.locale
        }),
      });

      if (!response.ok) throw new Error("Failed to assign Secret Santa");

      alert("Secret Santa assignment successful!");
      router.push("/done");
    } catch (error) {
      alert("There was an error assigning Secret Santa.");
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta
          name="description"
          content="Add and manage participants for your Secret Santa exchange. Ensure everyone has a wishlist and budget set for a fun and organized gift exchange."
        />
        <meta
          name="keywords"
          content="Secret Santa, Participants, Gift Exchange, Wishlist, Budget"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-8">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base"
            >
              <FaSleigh className="text-lg sm:text-xl" /> {t('form.back')}
            </button>
            <button
              onClick={downloadTemplate}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base"
            >
              <FaDownload className="text-lg sm:text-xl" /> {t('template.download')}
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-gray-800 flex items-center justify-center gap-3 sm:gap-4">
            <FaGift className="text-red-600 text-xl sm:text-2xl md:text-3xl" />
            {t('title')}
            <FaGift className="text-green-600 text-xl sm:text-2xl md:text-3xl" />
          </h1>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl mb-6 sm:mb-8 md:mb-12 backdrop-blur-sm bg-opacity-90">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center text-gray-800 font-semibold">
              {t('template.download')}
            </h2>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 text-center cursor-pointer hover:border-red-400 transition-colors duration-200"
            >
              <input {...getInputProps()} />
              <FaUpload className="mx-auto text-xl sm:text-2xl md:text-3xl text-gray-400 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base text-gray-600">
                {isDragActive ? t('template.dropzone') : t('template.dropzone')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl mb-6 sm:mb-8 md:mb-12 backdrop-blur-sm bg-opacity-90">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center text-gray-800 font-semibold">
              {t('title')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder={t('form.name')}
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder={t('form.email')}
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>
              <textarea
                placeholder={t('form.wishlist')}
                value={wishlist}
                onChange={(e) => setWishlist(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                rows={3}
              />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="fixedBudget"
                    checked={fixedBudget}
                    onChange={(e) => setFixedBudget(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="fixedBudget" className="text-sm sm:text-base text-gray-700">
                    {t('form.fixedBudget')}
                  </label>
                </div>
                {fixedBudget ? (
                  <input
                    type="text"
                    placeholder={t('form.globalBudget')}
                    value={globalBudget}
                    onChange={(e) => {
                      setGlobalBudget(e.target.value);
                      setParticipants(
                        participants.map((p) => ({
                          ...p,
                          budget: e.target.value,
                        }))
                      );
                    }}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={t('form.individualBudget')}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base"
              >
                <FaGift className="text-lg sm:text-xl" /> {t('form.submit')}
              </button>
            </form>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl mb-6 sm:mb-8 md:mb-12 backdrop-blur-sm bg-opacity-90">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center text-gray-800 font-semibold">
              {t('list.title')}
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold">{t('form.name')}:</span>{" "}
                        {participant.username}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        <span className="font-semibold">{t('form.email')}:</span>{" "}
                        {participant.email}
                      </p>
                    </div>
                    <div>
                      {participant.wishlist && (
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">{t('form.wishlist')}:</span>{" "}
                          {participant.wishlist}
                        </p>
                      )}
                      {participant.budget && (
                        <p className="text-sm sm:text-base text-gray-700">
                          <span className="font-semibold">{t('form.individualBudget')}:</span>{" "}
                          {participant.budget}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="mt-4 bg-red-100 text-red-600 px-3 sm:px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              ))}
            </div>

            {participants.length >= 2 && (
              <button
                onClick={assignSecretSanta}
                disabled={isLoading}
                className={`mt-6 sm:mt-8 w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 sm:gap-3 shadow-md text-sm sm:text-base md:text-lg font-semibold ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaSleigh className="text-lg sm:text-xl md:text-2xl" />
                {isLoading ? t('list.loading') : t('list.startExchange')}
              </button>
            )}
          </div>
        </div>
      </div>
      <footer className="py-6 sm:py-8 text-center text-gray-600 text-sm sm:text-base border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          {commonT('copyright', { year: new Date().getFullYear() })}
        </div>
      </footer>
    </>
  );
}
