import "./header.css";

const TABS = [
  { key: "profile", label: "Profile" },
  { key: "interests", label: "Interests" },
  { key: "settings", label: "Settings" },
];

function Header({ setCurrentTab, currentTab }) {
  const onClick = (e) => {
    const tab = e.currentTarget.dataset.tab;
    setCurrentTab(tab);
  };

  return (
    <div className="header" role="tablist" aria-label="Profile sections">
      {TABS.map((t) => (
        <button
          key={t.key}
          type="button"
          data-tab={t.key}
          onClick={onClick}
          role="tab"
          aria-selected={currentTab === t.key}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export default Header;
