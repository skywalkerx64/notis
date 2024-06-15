<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import NoteCard from '@/components/Notes/NoteCard.vue'

const notes = [
  {
    title: 'Meeting Agenda',
    subtitle: 'Discuss Quarterly Targets',
    text: 'Agenda:\n1. Review performance of last quarter.\n2. Set goals for the upcoming quarter.\n3. Allocate resources accordingly.\n4. Any other business.\n\nPlease come prepared with your suggestions and ideas.',
    tags: [
      { title: 'meeting', color: '#ff0000' },
      { title: 'planning', color: '#00ff00' }
    ]
  },
  {
    title: 'Recipe',
    subtitle: 'Spaghetti Carbonara',
    text: 'Ingredients:\n- Spaghetti\n- Eggs\n- Pancetta\n- Parmesan cheese\n- Garlic\n- Black pepper\n\nInstructions:\n1. Cook spaghetti according to package instructions.\n2. Fry pancetta and garlic until crispy.\n3. Beat eggs with grated Parmesan.\n4. Drain spaghetti and add to pancetta.\n5. Remove from heat and quickly stir in egg mixture.\n6. Season with black pepper and serve immediately.',
    tags: [
      { title: 'recipe', color: '#0000ff' },
      { title: 'cooking', color: '#ff00ff' }
    ]
  },
  {
    title: 'Fitness Plan',
    subtitle: 'Weekly Workout Schedule',
    text: 'Monday: Cardio - 30 minutes jogging\nTuesday: Strength - Upper body workout\nWednesday: Rest day\nThursday: Cardio - 45 minutes cycling\nFriday: Strength - Lower body workout\nSaturday: Yoga - 1 hour\nSunday: Rest day',
    tags: [
      { title: 'fitness', color: '#00ffff' },
      { title: 'health', color: '#ffff00' }
    ]
  },
  {
    title: 'Fitness Plan',
    subtitle: 'Weekly Workout Schedule',
    text: 'Monday: Cardio - 30 minutes jogging\nTuesday: Strength - Upper body workout\nWednesday: Rest day\nThursday: Cardio - 45 minutes cycling\nFriday: Strength - Lower body workout\nSaturday: Yoga - 1 hour\nSunday: Rest day',
    tags: [
      { title: 'fitness', color: '#00ffff' },
      { title: 'health', color: '#ffff00' }
    ]
  }
]
</script>

<template>
  <MainLayout>
    <div class="md:container md:mx-auto">
      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-wrap gap-4">
        <NoteCard
          v-for="note in notes"
          :key="note.title"
          :title="note.title"
          :subtitle="note.subtitle"
          :text="note.text"
          :tags="note.tags"
        />
      </div>
    </div>
  </MainLayout>
</template>
