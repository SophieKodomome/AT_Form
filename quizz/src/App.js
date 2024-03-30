import React from 'react';
import QuizForm from './Form';

function App() {
  const handleSubmit = () => {
    console.log("Next button clicked");
  };

  return (
    <main className="bg-blue-100 min-h-screen flex justify-center items-center">
      <article className="container border rounded-lg shadow-lg p-4 bg-white max-w-md">
        <h1 className="font-bold text-3xl text-blue-500 mb-6 uppercase">Analyse Transactionelle</h1>
        <section>
          <QuizForm onSubmit={handleSubmit} />
        </section>
      </article>
    </main>
  );
}

export default App;
