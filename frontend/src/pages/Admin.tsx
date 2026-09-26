import { useState, useEffect } from 'react';
import { Terminal, Send, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/admin/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey })
      });
      
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setStatus('idle');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fetchMessages = async () => {
    setMessagesLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/messages`);
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error('Failed to fetch messages', err);
    } finally {
      setMessagesLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/messages/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setMessages(messages.filter(m => m._id !== id));
      }
    } catch (err) {
      console.error('Failed to delete message', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-6 selection:bg-cyan-500/30">
        <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-2xl border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>

          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </button>

          <h2 className="text-2xl font-bold font-gaming uppercase text-center mb-2 tracking-wider">Admin Access</h2>
          <p className="text-cyan-400/60 font-mono text-xs text-center uppercase tracking-widest mb-8">System Restricted</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Passkey
              </label>
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                required
                className="w-full bg-[#050505]/50 border border-cyan-900/50 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                placeholder="Enter admin passkey"
              />
              {status === 'error' && (
                <p className="text-red-500 text-xs font-mono mt-2">Access Denied. Invalid passkey.</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-gaming font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all rounded-sm"
            >
              {status === 'loading' ? 'Authenticating...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 selection:bg-cyan-500/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-gaming uppercase tracking-wider text-cyan-400">Command Center</h1>
            <p className="text-white/50 font-mono text-sm">Incoming messages and transmissions.</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)} 
            className="border border-cyan-500/50 text-cyan-400 px-4 py-2 font-mono text-sm rounded-sm hover:bg-cyan-500/10 transition-colors"
          >
            Logout
          </button>
        </div>

        {messagesLoading ? (
          <div className="text-center font-mono text-cyan-400 animate-pulse py-10">Fetching messages...</div>
        ) : messages.length === 0 ? (
          <div className="text-center font-mono text-white/50 py-10 border border-dashed border-cyan-900/50 rounded-xl">
            No messages found in the database.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {messages.map((msg) => (
              <div key={msg._id} className="glass-panel p-6 rounded-xl border border-cyan-900/50 hover:border-cyan-500/50 transition-colors relative group">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" /> {msg.name}
                    </h3>
                    <a href={`mailto:${msg.email}`} className="text-cyan-400 font-mono text-sm hover:underline">
                      {msg.email}
                    </a>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 font-mono text-xs">
                      {new Date(msg.createdAt).toLocaleString()}
                    </p>
                    <button 
                      onClick={() => deleteMessage(msg._id)}
                      className="mt-2 text-red-400/70 hover:text-red-400 p-2 rounded hover:bg-red-950/30 transition-colors inline-flex items-center gap-1 text-xs font-mono uppercase"
                    >
                      <Trash2 className="w-3 h-3" /> Delete
                    </button>
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-md border border-white/5">
                  <p className="text-white/80 whitespace-pre-wrap font-mono text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
