//profile page
import { useEffect, useState } from 'react';
import Head from 'next/head';

type Recipe = {
  id: number;
  title: string;
  ingredients: number;
  time: string;
  difficulty: string;
  image: string;
};

type Badge = {
  name: string;
  icon: string;
};

type ProfileStats = {
  recipesCreated: number;
  ingredientsUsed: number;
  mealsShared: number;
  streak: number;
};

type ProfileData = {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  stats: ProfileStats;
  savedRecipes: Recipe[];
  badges: Badge[];
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'saved' | 'created'>('saved');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [darkMode]);

  const profileData: ProfileData = {
    name: 'Chef Jamie',
    username: '@ratatoullie_boss',
    bio: "Home cook and food enthusiast. Love creating recipes from whatever's in my pantry!",
    avatar: 'https://placehold.co/200x200',
    stats: {
      recipesCreated: 24,
      ingredientsUsed: 78,
      mealsShared: 42,
      streak: 15,
    },
    savedRecipes: [
      {
        id: 1,
        title: 'Pantry Pasta Primavera',
        ingredients: 5,
        time: '25 min',
        difficulty: 'Easy',
        image: 'https://placehold.co/300x200',
      },
      {
        id: 2,
        title: 'Chickpea Curry',
        ingredients: 7,
        time: '35 min',
        difficulty: 'Medium',
        image: 'https://placehold.co/300x200',
      },
    ],
    badges: [
      { name: '5-Ingredient Pro', icon: '🥑' },
      { name: 'Meal Planner', icon: '📅' },
      { name: 'Pantry Wizard', icon: '🧙' },
    ],
  };

  return (
    <>
      <Head>
        <title>{profileData.name} | Ratatoullie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-warning'}`}>
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">Ratatoullie</span>
          <button className="btn btn-outline-light ms-auto" onClick={toggleDarkMode}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-5">
        {/* Profile Header */}
        <div className="d-flex align-items-center gap-4 mb-4">
          <img src={profileData.avatar} alt="Profile" className="rounded-circle border border-warning" width={100} />
          <div>
            <h2>{profileData.name}</h2>
            <p className="text-muted">{profileData.bio}</p>
            <div className="d-flex flex-wrap gap-2">
              {profileData.badges.map((badge, i) => (
                <span key={i} className={`badge ${darkMode ? 'bg-light text-dark' : 'bg-warning text-dark'}`}>
                  {badge.icon} {badge.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row text-center mb-4">
          {Object.entries(profileData.stats).map(([key, value]) => (
            <div key={key} className="col-6 col-md-3 mb-3">
              <div className={`card shadow-sm ${darkMode ? 'bg-secondary text-light' : ''}`}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{value}</h5>
                  <p className="card-text text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
              Saved Recipes
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === 'created' ? 'active' : ''}`} onClick={() => setActiveTab('created')}>
              My Recipes
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        {activeTab === 'saved' ? (
          <div className="row">
            {profileData.savedRecipes.map((recipe) => (
              <div key={recipe.id} className="col-md-6 mb-4">
                <div className={`card h-100 ${darkMode ? 'bg-secondary text-light' : ''}`}>
                  <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">
                      {recipe.ingredients} ingredients · {recipe.time} · {recipe.difficulty}
                    </p>
                    <button className="btn btn-outline-warning">View Recipe →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <img src="https://placehold.co/300x200" alt="Create Recipe" className="mb-3" />
            <h4>Your culinary creations will appear here!</h4>
            <p>Start adding recipes to showcase your cooking journey.</p>
            <button className="btn btn-warning">Create Recipe</button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`text-center py-3 ${darkMode ? 'bg-dark text-light' : 'bg-warning text-dark'}`}>
        © 2025 Ratatoullie · Built by JBB
      </footer>
    </>
  );
}
