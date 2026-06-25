import { Lock, ExternalLink, Trash2, Mail } from 'lucide-react';
import { useState } from 'react';

const value = import.meta.env.VITE_API_BASE;

export default function Footer() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [passkey, setPasskey] = useState('');
  const [activePasskey, setActivePasskey] = useState('');
  const [showPasskeyPrompt, setShowPasskeyPrompt] = useState(false);

  const handleAdminAccess = () => {
    setShowPasskeyPrompt(true);
  };

  const verifyPasskey = async () => {
    try {
      const res = await fetch(`${value}/api/admin/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey }),
      });

      if (!res.ok) {
        throw new Error("Invalid passkey");
      }

      setActivePasskey(passkey);
      setShowPasskeyPrompt(false);
      setPasskey('');
      await fetchMessages(passkey);
    } catch (err) {
      console.error(err);
      alert("Invalid admin passkey");
    }
  };

  const fetchMessages = async (currentPasskey: string) => {
    try {
      const res = await fetch(`${value}/api/messages`, {
        headers: {
          'x-admin-passkey': currentPasskey
        }
      });

      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const data = await res.json();
      setMessages(data);
      setShowAdmin(true);
    } catch (err) {
      console.error(err);
      alert("Admin authentication failed");
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`${value}/api/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-passkey': activePasskey
        }
      });

      if (!res.ok) throw new Error();

      setMessages(prev => prev.filter(m => m._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete message");
    }
  };

  return (
    <>
      <footer className="py-12 border-t border-white/5 text-center text-white/40 font-mono text-xs uppercase tracking-[0.2em] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"></div>
        <div className="mb-4 hover:text-white transition-colors duration-300">
          &copy; 2026 Thamminana Vipul &bull; Built with React & Three.js
        </div>
        <button 
          onClick={handleAdminAccess}
          className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-2 mx-auto opacity-50 hover:opacity-100"
        >
          <Lock className="w-3 h-3" /> Admin Access
        </button>
      </footer>

      {/* Passkey Prompt */}
      {showPasskeyPrompt && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-xl" onClick={() => setShowPasskeyPrompt(false)} />
          <div className="relative glass p-10 rounded-3xl w-full max-w-sm border border-white/10 shadow-2xl shadow-emerald-500/10">
            <h3 className="text-xl font-bold mb-6 text-center text-white/90">Admin Authentication</h3>
            <input
              type="password"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && verifyPasskey()}
              placeholder="Enter secure passkey..."
              className="w-full bg-[#050505]/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 mb-6 text-center tracking-widest transition-colors"
              autoFocus
            />
            <div className="flex gap-4">
              <button onClick={() => setShowPasskeyPrompt(false)} className="flex-1 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">Cancel</button>
              <button onClick={verifyPasskey} className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-bold rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">Verify</button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md" onClick={() => setShowAdmin(false)} />
          <div className="relative glass w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-[2rem] flex flex-col border border-white/10 shadow-2xl shadow-emerald-500/10">
            <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/5">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Lock className="w-5 h-5 text-emerald-400" />
                Contact Submissions
              </h2>
              <button onClick={() => setShowAdmin(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ExternalLink className="w-5 h-5 rotate-45" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto grow custom-scrollbar">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-white/40">
                  <Mail className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono text-sm tracking-widest uppercase">No messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg._id} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors group relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-emerald-400 text-lg">{msg.name}</h4>
                          <p className="text-xs text-white/60 font-mono mt-1">{msg.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">
                            {new Date(msg.createdAt).toLocaleDateString()}
                          </span>
                          <button 
                            onClick={() => deleteMessage(msg._id)}
                            className="p-2 text-white/20 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                            title="Delete message"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed font-light">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
