// // // // import { useState } from 'react';
// // // // import Head from 'next/head';

// // // // export default function ChefProfile() {
// // // //   const [activeTab, setActiveTab] = useState('saved');
// // // //   const [preferences, setPreferences] = useState({
// // // //     dietaryRestrictions: [],
// // // //     cuisinePreferences: [],
// // // //     cookingSkill: 'intermediate'
// // // //   });

// // // //   const profileData = {
// // // //     name: "Chef Jamie",
// // // //     username: "@ratatoullie_boss",
// // // //     bio: "Home cook and food enthusiast. Love creating recipes from whatever's in my pantry!",
// // // //     avatar: "https://placehold.co/200x200",
// // // //     stats: {
// // // //       recipesCreated: 24,
// // // //       ingredientsUsed: 78,
// // // //       mealsShared: 42,
// // // //       streak: 15
// // // //     },
// // // //     savedRecipes: [
// // // //       {
// // // //         id: 1,
// // // //         title: "Pantry Pasta Primavera",
// // // //         ingredients: 5,
// // // //         time: "25 min",
// // // //         difficulty: "Easy",
// // // //         image: "https://placehold.co/300x200"
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         title: "Chickpea Curry",
// // // //         ingredients: 7,
// // // //         time: "35 min",
// // // //         difficulty: "Medium",
// // // //         image: "https://placehold.co/300x200"
// // // //       }
// // // //     ],
// // // //     badges: [
// // // //       { name: "5-Ingredient Pro", icon: "🥑" },
// // // //       { name: "Meal Planner", icon: "📅" },
// // // //       { name: "Pantry Wizard", icon: "🧙" }
// // // //     ]
// // // //   };

// // // //   const dietOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];
// // // //   const cuisineOptions = ['Italian', 'Mexican', 'Asian', 'Mediterranean'];

// // // //   const togglePreference = (type, value) => {
// // // //     setPreferences(prev => {
// // // //       const updated = prev[type].includes(value)
// // // //         ? prev[type].filter(item => item !== value)
// // // //         : [...prev[type], value];
// // // //       return { ...prev, [type]: updated };
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 text-gray-800">
// // // //       <Head>
// // // //         <title>{profileData.name} | Profile</title>
// // // //       </Head>

// // // //       <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
// // // //         {/* Profile Header */}
// // // //         <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-center">
// // // //           <img
// // // //             src={profileData.avatar}
// // // //             alt={profileData.name}
// // // //             className="h-32 w-32 rounded-full border-4 border-yellow-400 object-cover"
// // // //           />
// // // //           <div>
// // // //             <h1 className="text-3xl font-bold">{profileData.name}</h1>
// // // //             <p className="text-sm text-gray-500">{profileData.username}</p>
// // // //             <p className="mt-2">{profileData.bio}</p>
// // // //             <div className="mt-3 flex flex-wrap gap-2">
// // // //               {profileData.badges.map((badge, idx) => (
// // // //                 <span key={idx} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
// // // //                   {badge.icon} {badge.name}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Stats */}
// // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // // //           {Object.entries(profileData.stats).map(([key, value]) => (
// // // //             <div key={key} className="bg-white p-4 rounded-lg shadow text-center">
// // // //               <div className="text-2xl font-bold text-yellow-500">{value}</div>
// // // //               <div className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Preferences + Recipes */}
// // // //         <div className="flex flex-col md:flex-row gap-8">
// // // //           {/* Preferences */}
// // // //           <div className="md:w-1/3 bg-white p-6 rounded-xl shadow">
// // // //             <h2 className="text-xl font-semibold mb-4">Cooking Preferences</h2>

// // // //             <div className="mb-6">
// // // //               <h3 className="font-medium mb-2">Dietary Restrictions</h3>
// // // //               {dietOptions.map(option => (
// // // //                 <label key={option} className="flex items-center mb-1">
// // // //                   <input
// // // //                     type="checkbox"
// // // //                     className="accent-yellow-500"
// // // //                     checked={preferences.dietaryRestrictions.includes(option)}
// // // //                     onChange={() => togglePreference('dietaryRestrictions', option)}
// // // //                   />
// // // //                   <span className="ml-2">{option}</span>
// // // //                 </label>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mb-6">
// // // //               <h3 className="font-medium mb-2">Cuisine Preferences</h3>
// // // //               {cuisineOptions.map(option => (
// // // //                 <label key={option} className="flex items-center mb-1">
// // // //                   <input
// // // //                     type="checkbox"
// // // //                     className="accent-yellow-500"
// // // //                     checked={preferences.cuisinePreferences.includes(option)}
// // // //                     onChange={() => togglePreference('cuisinePreferences', option)}
// // // //                   />
// // // //                   <span className="ml-2">{option}</span>
// // // //                 </label>
// // // //               ))}
// // // //             </div>

// // // //             <div>
// // // //               <h3 className="font-medium mb-2">Skill Level</h3>
// // // //               <select
// // // //                 value={preferences.cookingSkill}
// // // //                 onChange={(e) => setPreferences({ ...preferences, cookingSkill: e.target.value })}
// // // //                 className="w-full border rounded px-3 py-2"
// // // //               >
// // // //                 <option value="beginner">Beginner</option>
// // // //                 <option value="intermediate">Intermediate</option>
// // // //                 <option value="advanced">Advanced</option>
// // // //               </select>
// // // //             </div>
// // // //           </div>

// // // //           {/* Recipes */}
// // // //           <div className="md:w-2/3">
// // // //             {/* Tab nav */}
// // // //             <div className="flex gap-4 border-b mb-4">
// // // //               <button
// // // //                 onClick={() => setActiveTab('saved')}
// // // //                 className={`pb-2 border-b-2 ${
// // // //                   activeTab === 'saved'
// // // //                     ? 'border-yellow-500 text-yellow-600 font-semibold'
// // // //                     : 'border-transparent text-gray-500'
// // // //                 }`}
// // // //               >
// // // //                 Saved Recipes ({profileData.savedRecipes.length})
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setActiveTab('created')}
// // // //                 className={`pb-2 border-b-2 ${
// // // //                   activeTab === 'created'
// // // //                     ? 'border-yellow-500 text-yellow-600 font-semibold'
// // // //                     : 'border-transparent text-gray-500'
// // // //                 }`}
// // // //               >
// // // //                 My Recipes ({profileData.stats.recipesCreated})
// // // //               </button>
// // // //             </div>

// // // //             {/* Tab content */}
// // // //             {activeTab === 'saved' ? (
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                 {profileData.savedRecipes.map(recipe => (
// // // //                   <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden">
// // // //                     <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
// // // //                     <div className="p-4">
// // // //                       <h4 className="font-bold text-lg">{recipe.title}</h4>
// // // //                       <p className="text-sm text-gray-600 mt-1">
// // // //                         {recipe.ingredients} ingredients • {recipe.time} • {recipe.difficulty}
// // // //                       </p>
// // // //                       <button className="mt-3 text-yellow-600 hover:underline text-sm">
// // // //                         View Recipe →
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="text-center py-12">
// // // //                 <img
// // // //                   src="https://placehold.co/300x200"
// // // //                   alt="Cooking illustration"
// // // //                   className="mx-auto mb-4"
// // // //                 />
// // // //                 <h3 className="text-xl font-semibold text-gray-700">No recipes yet</h3>
// // // //                 <p className="text-gray-500 mt-1">Create and share your own meals here</p>
// // // //                 <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
// // // //                   Create New Recipe
// // // //                 </button>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import Head from 'next/head';
// // // import { useState } from 'react';

// // // export default function ChefProfile({ profileData }) {
// // //   const [activeTab, setActiveTab] = useState('saved');

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-yellow-50">
// // //       <Head>
// // //         <title>{profileData.name} | Pantry Chef Profile</title>
// // //       </Head>

// // //       <div className="max-w-5xl mx-auto px-4 py-10">
// // //         {/* Profile Header */}
// // //         <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center space-x-6">
// // //           <img
// // //             src={profileData.avatar}
// // //             alt={profileData.name}
// // //             className="h-32 w-32 rounded-full object-cover border-4 border-yellow-400"
// // //           />
// // //           <div>
// // //             <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
// // //             <p className="text-gray-500">{profileData.bio}</p>
// // //             <div className="mt-4 flex gap-2 flex-wrap">
// // //               {profileData.badges.map((badge, i) => (
// // //                 <span key={i} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm shadow">
// // //                   {badge.icon} {badge.name}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Stats */}
// // //         <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// // //           {Object.entries(profileData.stats).map(([key, value]) => (
// // //             <div key={key} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
// // //               <div className="text-2xl font-bold text-yellow-600">{value}</div>
// // //               <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Tabs */}
// // //         <div className="mt-10">
// // //           <div className="flex border-b border-gray-300">
// // //             {['saved', 'created'].map(tab => (
// // //               <button
// // //                 key={tab}
// // //                 onClick={() => setActiveTab(tab)}
// // //                 className={`py-2 px-6 text-sm font-medium ${
// // //                   activeTab === tab
// // //                     ? 'border-b-2 border-yellow-500 text-yellow-700'
// // //                     : 'text-gray-500 hover:text-yellow-500'
// // //                 }`}
// // //               >
// // //                 {tab === 'saved'
// // //                   ? `Saved Recipes (${profileData.savedRecipes.length})`
// // //                   : `Created Recipes (${profileData.stats.recipesCreated})`}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-6">
// // //             {activeTab === 'saved' ? (
// // //               <div className="grid md:grid-cols-2 gap-6">
// // //                 {profileData.savedRecipes.map(recipe => (
// // //                   <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
// // //                     <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
// // //                     <div className="p-4">
// // //                       <h3 className="font-bold text-lg">{recipe.title}</h3>
// // //                       <div className="text-sm text-gray-600 mt-2 space-x-3">
// // //                         <span>{recipe.ingredients} ingredients</span>
// // //                         <span>{recipe.time}</span>
// // //                         <span>{recipe.difficulty}</span>
// // //                       </div>
// // //                       <button className="mt-4 inline-block text-yellow-600 hover:text-yellow-800 text-sm font-medium">
// // //                         View Recipe →
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="text-center py-12">
// // //                 <img src="https://placehold.co/400x250" alt="Cooking illustration" className="mx-auto mb-4" />
// // //                 <h3 className="text-xl font-semibold text-gray-700">No recipes created yet</h3>
// // //                 <p className="text-gray-500">Start sharing your kitchen magic!</p>
// // //                 <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition">
// // //                   Create New Recipe
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // 🧠 Server-side data simulation
// // // export async function getServerSideProps() {
// // //   // Replace this with real API/database fetch later
// // //   const profileData = {
// // //     name: "Chef Jamie",
// // //     username: "@ratatoullie_boss",
// // //     bio: "Home cook and food enthusiast. Love creating recipes from whatever's in my pantry!",
// // //     avatar: "https://placehold.co/200x200",
// // //     stats: {
// // //       recipesCreated: 24,
// // //       ingredientsUsed: 78,
// // //       mealsShared: 42,
// // //       streak: 15
// // //     },
// // //     savedRecipes: [
// // //       {
// // //         id: 1,
// // //         title: "Pantry Pasta Primavera",
// // //         ingredients: 5,
// // //         time: "25 min",
// // //         difficulty: "Easy",
// // //         image: "https://placehold.co/600x400"
// // //       },
// // //       {
// // //         id: 2,
// // //         title: "Chickpea Curry",
// // //         ingredients: 7,
// // //         time: "35 min",
// // //         difficulty: "Medium",
// // //         image: "https://placehold.co/600x400"
// // //       }
// // //     ],
// // //     badges: [
// // //       { name: "5-Ingredient Pro", icon: "🥑" },
// // //       { name: "Meal Planner", icon: "📅" },
// // //       { name: "Pantry Wizard", icon: "🧙" }
// // //     ]
// // //   };

// // //   return { props: { profileData } };
// // // }
// // import { useState } from 'react';
// // import Head from 'next/head';

// // export default function ChefProfile({ profileData }) {
// //   const [activeTab, setActiveTab] = useState('saved');

// //   return (
// //     <div className="min-h-screen bg-gradient-to-tr from-yellow-100 via-white to-orange-100 font-sans">
// //       <Head>
// //         <title>{profileData.name} | Pantry Chef Profile</title>
// //       </Head>

// //       <main className="max-w-6xl mx-auto px-6 py-12">
// //         {/* Header */}
// //         <section className="bg-white rounded-3xl shadow-xl p-8 flex items-center space-x-8 transition hover:shadow-2xl">
// //           <img
// //             src={profileData.avatar}
// //             alt={profileData.name}
// //             className="h-32 w-32 rounded-full object-cover border-4 border-yellow-500 shadow-md"
// //           />
// //           <div>
// //             <h1 className="text-4xl font-bold text-gray-800">{profileData.name}</h1>
// //             <p className="text-gray-500 mt-1">{profileData.bio}</p>
// //             <div className="flex flex-wrap mt-4 gap-2">
// //               {profileData.badges.map((badge, i) => (
// //                 <span key={i} className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm shadow-sm">
// //                   {badge.icon} {badge.name}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Stats */}
// //         <section className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
// //           {Object.entries(profileData.stats).map(([key, value]) => (
// //             <div
// //               key={key}
// //               className="bg-white text-center rounded-xl p-6 shadow-md hover:shadow-xl transition duration-200"
// //             >
// //               <div className="text-3xl font-extrabold text-yellow-600">{value}</div>
// //               <div className="text-sm text-gray-500 mt-1 capitalize">
// //                 {key.replace(/([A-Z])/g, ' $1')}
// //               </div>
// //             </div>
// //           ))}
// //         </section>

// //         {/* Tabs */}
// //         <section className="mt-12">
// //           <div className="flex gap-4 border-b border-gray-300">
// //             {['saved', 'created'].map(tab => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`py-2 px-6 text-sm font-semibold rounded-t-md transition ${
// //                   activeTab === tab
// //                     ? 'bg-yellow-200 text-yellow-800 shadow-inner'
// //                     : 'text-gray-500 hover:text-yellow-600'
// //                 }`}
// //               >
// //                 {tab === 'saved'
// //                   ? `Saved Recipes (${profileData.savedRecipes.length})`
// //                   : `Created Recipes (${profileData.stats.recipesCreated})`}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Content */}
// //           <div className="mt-6">
// //             {activeTab === 'saved' ? (
// //               <div className="grid md:grid-cols-2 gap-8">
// //                 {profileData.savedRecipes.map(recipe => (
// //                   <div key={recipe.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition">
// //                     <img
// //                       src={recipe.image}
// //                       alt={recipe.title}
// //                       className="w-full h-48 object-cover rounded-t-xl"
// //                     />
// //                     <div className="p-5">
// //                       <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
// //                       <div className="mt-2 text-sm text-gray-600 space-x-3">
// //                         <span>{recipe.ingredients} ingredients</span>
// //                         <span>{recipe.time}</span>
// //                         <span>{recipe.difficulty}</span>
// //                       </div>
// //                       <button className="mt-4 inline-block text-yellow-600 hover:text-yellow-800 text-sm font-medium">
// //                         View Recipe →
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="text-center py-12">
// //                 <img src="https://placehold.co/400x250" alt="Create Illustration" className="mx-auto mb-4 rounded-lg" />
// //                 <h3 className="text-xl font-medium text-gray-700">No recipes created yet</h3>
// //                 <p className="text-gray-500">Start sharing your kitchen magic!</p>
// //                 <button className="mt-5 bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:bg-yellow-600 transition">
// //                   Create New Recipe
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </section>
// //       </main>
// //     </div>
// //   );
// // }

// // // --- Server Data Stub ---
// // export async function getServerSideProps() {
// //   const profileData = {
// //     name: "Chef Jamie",
// //     username: "@ratatoullie_boss",
// //     bio: "Home cook and food enthusiast. Love creating recipes from whatever's in my pantry!",
// //     avatar: "https://placehold.co/200x200",
// //     stats: {
// //       recipesCreated: 24,
// //       ingredientsUsed: 78,
// //       mealsShared: 42,
// //       streak: 15
// //     },
// //     savedRecipes: [
// //       {
// //         id: 1,
// //         title: "Pantry Pasta Primavera",
// //         ingredients: 5,
// //         time: "25 min",
// //         difficulty: "Easy",
// //         image: "https://placehold.co/600x400"
// //       },
// //       {
// //         id: 2,
// //         title: "Chickpea Curry",
// //         ingredients: 7,
// //         time: "35 min",
// //         difficulty: "Medium",
// //         image: "https://placehold.co/600x400"
// //       }
// //     ],
// //     badges: [
// //       { name: "5-Ingredient Pro", icon: "🥑" },
// //       { name: "Meal Planner", icon: "📅" },
// //       { name: "Pantry Wizard", icon: "🧙" }
// //     ]
// //   };

// //   return { props: { profileData } };
// // }

// import Head from 'next/head';
// import { useState } from 'react';

// export default function ChefProfile() {
//   const [activeTab, setActiveTab] = useState('saved');
//   const [preferences, setPreferences] = useState({
//     dietaryRestrictions: [],
//     cuisinePreferences: [],
//     cookingSkill: 'intermediate',
//   });

//   const profileData = {
//     name: "Chef Jamie",
//     username: "@ratatoullie_boss",
//     bio: "Home cook and food enthusiast. Love creating recipes from whatever's in my pantry!",
//     avatar: "https://placehold.co/200x200",
//     stats: {
//       recipesCreated: 24,
//       ingredientsUsed: 78,
//       mealsShared: 42,
//       streak: 15,
//     },
//     savedRecipes: [
//       {
//         id: 1,
//         title: "Pantry Pasta Primavera",
//         ingredients: 5,
//         time: "25 min",
//         difficulty: "Easy",
//         image: "https://placehold.co/300x200",
//       },
//       {
//         id: 2,
//         title: "Chickpea Curry",
//         ingredients: 7,
//         time: "35 min",
//         difficulty: "Medium",
//         image: "https://placehold.co/300x200",
//       },
//     ],
//     badges: [
//       { name: "5-Ingredient Pro", icon: "🥑" },
//       { name: "Meal Planner", icon: "📅" },
//       { name: "Pantry Wizard", icon: "🧙" },
//     ],
//   };

//   const dietOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];
//   const cuisineOptions = ['Italian', 'Mexican', 'Asian', 'Mediterranean'];

//   const togglePreference = (type, value) => {
//     setPreferences((prev) => {
//       const current = [...prev[type]];
//       return {
//         ...prev,
//         [type]: current.includes(value)
//           ? current.filter((item) => item !== value)
//           : [...current, value],
//       };
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>{profileData.name} | Pantry Chef Profile</title>
//       </Head>

//       <div className="container my-5">
//         {/* Profile Header */}
//         <div className="card mb-4 p-4">
//           <div className="row g-4 align-items-center">
//             <div className="col-md-3 text-center">
//               <img
//                 src={profileData.avatar}
//                 alt="Profile"
//                 className="rounded-circle border border-warning"
//                 width={150}
//                 height={150}
//               />
//             </div>
//             <div className="col-md-9">
//               <h3>{profileData.name}</h3>
//               <p className="text-muted">{profileData.bio}</p>
//               <div>
//                 {profileData.badges.map((badge, i) => (
//                   <span key={i} className="badge bg-warning text-dark me-2">
//                     {badge.icon} {badge.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="row text-center mb-4">
//           {Object.entries(profileData.stats).map(([key, value]) => (
//             <div key={key} className="col-6 col-md-3 mb-3">
//               <div className="border rounded py-3">
//                 <h4 className="text-warning">{value}</h4>
//                 <small className="text-muted">{key.replace(/([A-Z])/g, ' $1')}</small>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="row">
//           {/* Preferences */}
//           <div className="col-md-4 mb-4">
//             <div className="card p-3">
//               <h5>Cooking Preferences</h5>
//               <hr />

//               <strong>Dietary Restrictions</strong>
//               {dietOptions.map((option) => (
//                 <div className="form-check" key={option}>
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     checked={preferences.dietaryRestrictions.includes(option)}
//                     onChange={() => togglePreference('dietaryRestrictions', option)}
//                     id={option}
//                   />
//                   <label className="form-check-label" htmlFor={option}>
//                     {option}
//                   </label>
//                 </div>
//               ))}

//               <hr />
//               <strong>Cuisine Preferences</strong>
//               {cuisineOptions.map((option) => (
//                 <div className="form-check" key={option}>
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     checked={preferences.cuisinePreferences.includes(option)}
//                     onChange={() => togglePreference('cuisinePreferences', option)}
//                     id={option + 'cuisine'}
//                   />
//                   <label className="form-check-label" htmlFor={option + 'cuisine'}>
//                     {option}
//                   </label>
//                 </div>
//               ))}

//               <hr />
//               <strong>Skill Level</strong>
//               <select
//                 className="form-select"
//                 value={preferences.cookingSkill}
//                 onChange={(e) =>
//                   setPreferences({ ...preferences, cookingSkill: e.target.value })
//                 }
//               >
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="advanced">Advanced</option>
//               </select>
//             </div>
//           </div>

//           {/* Saved/Created Recipes */}
//           <div className="col-md-8">
//             <ul className="nav nav-tabs mb-3">
//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('saved')}
//                 >
//                   Saved Recipes ({profileData.savedRecipes.length})
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${activeTab === 'created' ? 'active' : ''}`}
//                   onClick={() => setActiveTab('created')}
//                 >
//                   My Recipes ({profileData.stats.recipesCreated})
//                 </button>
//               </li>
//             </ul>

//             {activeTab === 'saved' && (
//               <div className="row">
//                 {profileData.savedRecipes.map((recipe) => (
//                   <div key={recipe.id} className="col-md-6 mb-4">
//                     <div className="card h-100">
//                       <img src={recipe.image} className="card-img-top" alt={recipe.title} />
//                       <div className="card-body">
//                         <h5 className="card-title">{recipe.title}</h5>
//                         <p className="card-text text-muted">
//                           {recipe.ingredients} ingredients • {recipe.time} • {recipe.difficulty}
//                         </p>
//                         <button className="btn btn-outline-warning btn-sm">
//                           View Recipe →
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'created' && (
//               <div className="text-center py-4">
//                 <img src="https://placehold.co/300x200" alt="No creations" className="img-fluid mb-3" />
//                 <p>You haven’t created any recipes yet.</p>
//                 <button className="btn btn-warning">Create New Recipe</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


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
