export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}