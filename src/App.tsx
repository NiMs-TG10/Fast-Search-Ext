


import { Search, Plus, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export interface Mapping {
  id: string;
  shortcut: string;
  url: string;
  description: string;
}

interface EntryProps {
  Mapping: Mapping;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (updatedMapping: { shortcut: string; url: string; description: string }) => void;
  onCancel: () => void;
  onDelete: () => void;
}

interface AddMappingBoxProps {
  onClose: () => void;
  onSubmit: (data: { shortcut: string; url: string; description: string }) => void;
}

// Mock Entry Component
function Entry({ Mapping, isEditing, onEdit, onSave, onCancel, onDelete }: EntryProps) {
  const [editData, setEditData] = useState({
    shortcut: Mapping.shortcut,
    url: Mapping.url,
    description: Mapping.description,
  });

  if (isEditing) {
    return (
      <tr className="group animate-fadeIn">
        <td className="px-3 py-4">
          <input
            value={editData.shortcut}
            onChange={(e) => setEditData({ ...editData, shortcut: e.target.value })}
            className="w-full bg-background-elevated border border-primary/30 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </td>
        <td className="px-3 py-4">
          <input
            value={editData.url}
            onChange={(e) => setEditData({ ...editData, url: e.target.value })}
            className="w-full bg-background-elevated border border-primary/30 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </td>
        <td className="px-3 py-4">
          <input
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
            className="w-full bg-background-elevated border border-primary/30 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </td>
        <td className="px-3 py-4 text-right space-x-2">
          <button
            onClick={() => onSave(editData)}
            className="px-3 py-1 bg-primary text-background-elevated rounded hover:bg-primary-light transition-all duration-200 hover:scale-105 text-sm font-medium"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-3 py-1 bg-background-subtle text-foreground-muted rounded hover:bg-background-elevated transition-all duration-200 hover:scale-105 text-sm"
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr className="group hover:bg-background-elevated/50 transition-all duration-300 animate-fadeIn">
      <td className="px-3 py-4">
        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono text-sm font-medium group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-200">
          {Mapping.shortcut}
        </span>
      </td>
      <td className="px-3 py-4">
        <a
          href={Mapping.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary transition-colors duration-200 text-sm hover:underline"
        >
          {Mapping.url}
        </a>
      </td>
      <td className="px-3 py-4 text-foreground-muted text-sm">{Mapping.description}</td>
      <td className="px-3 py-4 text-right">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-2">
          <button
            onClick={onEdit}
            className="px-3 py-1 bg-accent/20 text-accent rounded hover:bg-accent/30 transition-all duration-200 hover:scale-105 text-sm"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-all duration-200 hover:scale-105 text-sm"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

// Mock AddMappingBox Component
function AddMappingBox({ onClose, onSubmit }: AddMappingBoxProps) {
  const [formData, setFormData] = useState({
    shortcut: "",
    url: "",
    description: "",
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-background-elevated border border-primary/20 rounded-2xl p-8 w-[500px] shadow-luxury animate-slideUp">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-semibold font-urbanist text-foreground">Add New Mapping</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground-muted mb-2">Shortcut</label>
            <input
              value={formData.shortcut}
              onChange={(e) => setFormData({ ...formData, shortcut: e.target.value })}
              placeholder="e.g., gh"
              className="w-full bg-background-subtle border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground-muted mb-2">URL</label>
            <input
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              placeholder="https://github.com"
              className="w-full bg-background-subtle border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground-muted mb-2">Description</label>
            <input
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="GitHub homepage"
              className="w-full bg-background-subtle border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => {
              if (formData.shortcut && formData.url) {
                onSubmit(formData);
                onClose();
              }
            }}
            className="flex-1 bg-primary text-background-elevated font-medium py-3 rounded-lg hover:bg-primary-light transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-soft"
          >
            Add Mapping
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-background-subtle text-foreground-muted font-medium py-3 rounded-lg hover:bg-background-elevated transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mappings, setMappings] = useState<Mapping[]>([
    { id: "1", shortcut: "gh", url: "https://github.com", description: "GitHub - Code hosting" },
    { id: "2", shortcut: "tw", url: "https://twitter.com", description: "Twitter - Social media" },
    { id: "3", shortcut: "yt", url: "https://youtube.com", description: "YouTube - Video platform" },
    { id: "4", shortcut: "rd", url: "https://reddit.com", description: "Reddit - Community forum" },
  ]);

  const [filteredMappings, setFilteredMappings] = useState<Mapping[]>(mappings);
  const [showAddBox, setShowAddBox] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredMappings(mappings);
  }, [mappings]);

  const handleFilter = (text: string) => {
    setSearchText(text);
    setFilteredMappings(
      mappings.filter(
        (element) =>
          element.shortcut.toLowerCase().includes(text.toLowerCase()) ||
          element.url.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const addMapping = (data: { shortcut: string; url: string; description: string }) => {
    const newMapping: Mapping = {
      id: crypto.randomUUID(),
      ...data,
    };
    setMappings([...mappings, newMapping]);
  };

  const handleEditMapping = (id: string, editData: { shortcut: string; url: string; description: string }) => {
    const updated = mappings.map((m) => (m.id === id ? { ...m, ...editData } : m));
    setMappings(updated);
  };

  const handleDeleteMapping = (id: string) => {
    setMappings(mappings.filter((m) => m.id !== id));
  };

  return (
    <div className="w-[650px] min-h-[550px] bg-background text-foreground font-geist relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {showAddBox && (
        <AddMappingBox
          onClose={() => setShowAddBox(false)}
          onSubmit={addMapping}
        />
      )}

      {/* Header */}
      <div className="relative py-6 border-b border-white/5 flex justify-center items-center backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-luxury animate-float">
            <Sparkles className="w-6 h-6 text-background" />
          </div>
          <span className="text-4xl font-bold font-urbanist bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            GoSearch
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative px-8 py-6">
        <div className="flex justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-foreground-muted group-focus-within:text-primary transition-colors duration-200" />
            </div>
            <input
              onChange={(e) => handleFilter(e.target.value)}
              value={searchText}
              type="text"
              placeholder="Search shortcuts, URLs..."
              className="w-full text-base placeholder:text-foreground-muted/50 focus:outline-none bg-background-elevated pl-12 pr-4 py-3 border border-white/10 rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-soft"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={() => setShowAddBox(true)}
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-light px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-luxury active:scale-[0.98] font-medium text-background-elevated"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Add Mapping</span>
            </div>
          </button>
        </div>

        {/* Mappings Table */}
        <div className="mt-8 animate-fadeIn">
          <div className="bg-background-elevated rounded-2xl shadow-luxury border border-white/10 overflow-hidden backdrop-blur-sm">
            <div className="custom-scrollbar overflow-x-auto">
              <div className="max-h-[320px] custom-scrollbar overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-background-subtle/80 sticky top-0 z-10 backdrop-blur-md">
                    <tr>
                      <th className="px-3 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                        Shortcut
                      </th>
                      <th className="px-3 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                        URL
                      </th>
                      <th className="px-3 py-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-3 py-4 text-right text-xs font-semibold text-primary uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredMappings.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-3 py-12 text-center text-foreground-muted">
                          <div className="flex flex-col items-center gap-3">
                            <Search className="w-12 h-12 text-foreground-muted/30" />
                            <p className="text-lg">No mappings found</p>
                            <p className="text-sm">Try adjusting your search or add a new mapping</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredMappings.map((mapping) => (
                        <Entry
                          key={mapping.id}
                          Mapping={mapping}
                          isEditing={editingId === mapping.id}
                          onEdit={() => setEditingId(mapping.id)}
                          onSave={(updatedMapping: { shortcut: string; url: string; description: string }) => {
                            handleEditMapping(mapping.id, updatedMapping);
                            setEditingId(null);
                          }}
                          onCancel={() => setEditingId(null)}
                          onDelete={() => handleDeleteMapping(mapping.id)}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-6 flex justify-between items-center text-sm text-foreground-muted">
          <span>{filteredMappings.length} mapping{filteredMappings.length !== 1 ? 's' : ''}</span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            All systems operational
          </span>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(201, 165, 107, 0.05);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #C9A56B 0%, #A88A5C 100%);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #E5D4B8 0%, #C9A56B 100%);
        }
      `}</style>
    </div>
  );
}
