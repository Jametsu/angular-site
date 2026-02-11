import { Component, OnInit, inject, signal, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';
import { Tag } from 'primeng/tag';
import { Select } from 'primeng/select';
import { Carousel } from 'primeng/carousel';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { DataService, Course, DaySchedule, SchoolInfo, ScheduleClass } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    Button,
    Card,
    TableModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Tag,
    Select,
    Carousel,
    AnimateOnScroll
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
  
  // Make window accessible in template
  window = window;
  
  // Active tab for programmatic navigation
  activeTab = signal(0);
  
  // Today's classes
  todaysClasses: ScheduleClass[] = [];
  
  // Carousel data
  carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop',
      title: 'Classical Ballet Excellence',
      description: 'Discover the grace and discipline of classical ballet with our expert instructors. Perfect for all ages and skill levels.',
      cta: 'Learn More'
    },
    {
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
      title: 'Contemporary Dance',
      description: 'Express yourself through modern movement. Our contemporary classes blend technique with creativity and artistic expression.',
      cta: 'Join Now'
    },
    {
      image: 'https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=800&h=600&fit=crop',
      title: 'Hip-Hop & Urban Dance',
      description: 'Get energized with our dynamic hip-hop classes. Learn the latest moves in a fun and supportive environment.',
      cta: 'Get Started'
    }
  ];
  
  carouselResponsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  
  // Course filtering
  selectedLevel: string | null = null;
  selectedScheduleLevel: string | null = null;
  levelOptions = [
    { label: 'All Levels', value: null },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
    { label: 'All Levels', value: 'All Levels' }
  ];
  
  get filteredCourses(): Course[] {
    if (!this.selectedLevel) {
      return this.courses;
    }
    return this.courses.filter(course => course.level === this.selectedLevel);
  }
  
  get filteredSchedule(): DaySchedule[] {
    if (!this.selectedScheduleLevel) {
      return this.schedule;
    }
    
    // Filter schedule by matching course names with the selected level
    return this.schedule.map(day => ({
      ...day,
      classes: day.classes.filter(scheduleClass => {
        // Find the course that matches this schedule class
        const course = this.courses.find(c => 
          scheduleClass.course.toLowerCase().includes(c.name.toLowerCase()) ||
          c.name.toLowerCase().includes(scheduleClass.course.toLowerCase())
        );
        // If course found, check if its level matches the filter
        return course ? course.level === this.selectedScheduleLevel : true;
      })
    })).filter(day => day.classes.length > 0); // Only show days with classes
  }

  ngOnInit() {
    this.loadData();
    this.checkSystemTheme();
  }
  
  updateTodaysClasses() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = daysOfWeek[new Date().getDay()];
    
    const todaySchedule = this.schedule.find(day => day.day === today);
    this.todaysClasses = todaySchedule?.classes || [];
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
        this.updateTodaysClasses();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading schedule:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  
  navigateToTab(tabIndex: number) {
    this.activeTab.set(tabIndex);
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
