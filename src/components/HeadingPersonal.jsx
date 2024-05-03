export default function HeadingPersonal({ modalHeaderOne, modalParagraph }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-medium mt-4 ml-6 text-2xl">{modalHeaderOne}</h1>
      <p className="text-sm ml-6 text-gray-500">{modalParagraph}</p>
    </div>
  );
}
