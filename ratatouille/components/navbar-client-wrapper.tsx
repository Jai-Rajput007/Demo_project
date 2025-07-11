"use client";

import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutDashboard, BookOpen, Info } from 'lucide-react';
import React from 'react';

const navItems = [
  { name: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { name: 'Recipes', url: '/recipes', icon: BookOpen },
  { name: 'About', url: '/about', icon: Info },
];

export function NavbarClientWrapper() {
  return <NavBar items={navItems} />;
}
