import { Component, OnInit, inject, signal, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { DataService, Course, DaySchedule, SchoolInfo } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Button,
    Card,
    TableModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tag
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private dataService = inject(DataService);
  private cdr = inject(ChangeDetectorRef);
  
  isDarkMode = signal(false);
  schoolInfo: SchoolInfo | null = null;
  courses: Course[] = [];
  schedule: DaySchedule[] = [];
  loading = true;

  ngOnInit() {
    this.loadData();
    this.checkSystemTheme();
  }

  loadData() {
    this.loading = true;
    
    this.dataService.getSchoolInfo().subscribe({
      next: (data) => {
        this.schoolInfo = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading school info:', err)
    });

    this.dataService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading courses:', err)
    });

    this.dataService.getSchedule().subscribe({
      next: (data) => {
        this.schedule = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading schedule:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  checkSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    const element = document.documentElement;
    
    if (this.isDarkMode()) {
      element.classList.add('dark-mode');
    } else {
      element.classList.remove('dark-mode');
    }
  }

  getLevelSeverity(level: string): 'success' | 'info' | 'warn' {
    switch (level.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'info';
      case 'advanced': return 'warn';
      default: return 'info';
    }
  }
}
