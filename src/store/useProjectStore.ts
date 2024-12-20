// src/store/useProjectStore.ts
import { IProject } from '@/data/types'
import { create } from 'zustand'

interface ProjectState {
  projects: IProject[]
  setProjects: (projects: IProject[]) => void
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}))
