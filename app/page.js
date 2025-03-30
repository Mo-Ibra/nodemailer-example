import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">
            Get in Touch
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-8">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
