// story.js (VERBATIM text from the PDF; only structure/IDs added)
const STORY_META = {
  title: "Your action will have consequences...",
  subtitle: "Follow the story of choices.",
};

const NODES = {
  start: {
    title:
      "In 6 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `
You are a workaholic scientist. Your wife urges you to go to work as today is a big day for you. Before leaving, you check on your daughter and kiss them both goodbye.

Today’s newspaper congratulates you and your co-workers for discovering the cure for cancer. A gas form cure that uses pathogens to kill cancer cells and other harmful cells. Your face is even on the front page!

As you go to work, the city is hustling and bustling. You have arrived at the building. Everyone congratulates you, except for one co-worker, Jim, who has always been jealous of your success.

The entrance to the roof is closed. One of your female co-workers, Annie, invited you to get drinks with them.

What do you do?`,
    choices: [
      { text: "A. Go to work", next: "day5_main" },
      {
        text: "B. Get drinks with your co- workers (Skip work)",
        next: "day6_skip_then_day5",
      },
    ],
  },

  day6_skip_then_day5: {
    title: "Skipping work",
    tag: "SCENE",
    text: `You finally decide to take a break. It took you 7 years to configure a cure. 

You spend the rest of your day in a bar with your co-workers and Annie. 

You left early.`,
    choices: [{ text: "Continue", next: "day5_main" }],
  },

  day5_main: {
    title:
      "In 5 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `
Your wife tells you about the phone that has been constantly ringing since this morning. It must be urgent.

Before driving to work, you pick up today’s newspaper. In a state of shock, you drop the paper and went pale. It says that the cure, your cure, is deemed deadly.

Officials state that the cancer cure does not only kill cancer cells. The drug kills every other living cell in not only the human body, but everything else. If the gas based drug was ever used, it could go on to cause catastrophic damage to the Earth.

You arrived at work. Your boss tells you his worries. It seems that almost everyone of your co-workers has left.

You enter the roof and you see Matthew, one of the major scientists involved in developing the cure, on the ledge of the roof.

Matthew tells you about his guilt for green lighting the distribution for the cure. He says he’s liable even though he personally saw the test results himself. Not able to live with himself anymore, he lets himself fall from the roof.`,
    choices: [{ text: "Continue", next: "day4_choice" }],
  },

  day4_choice: {
    title:
      "In 4 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `Your wife has heard the news and pleads for you to stay. “Does anything really matter anymore?” she says.

You see your daughter in the hallway, asking you why she doesn’t have school today; Unaware of the current events.

You pick up today’s newspaper. It says, “The end is nigh”

World leaders have reported that majority of the world has already contracted this virus. The first signs of the virus in your area include plant life dying, such as grass and trees. At the rate of the spread of infection, the end is near.

You get in your car and go to work. On your way to work, you see people protesting outside. The city coming to a chaos.

You arrived at work. Everyone has left except your boss. He advises you to go home and be with your family.

What do you do?`,
    choices: [
      { text: "A. Go to work", next: "day4_skip_then_day3" },
      { text: "B. Go home with your family.", next: "day4p3_skip_then_day3" },
    ],
  },

  day4_skip_then_day3: {
    tag: "SCENE",
    text: `You come home late at night. 
    
You enter your house, immediately noticing the pool of blood seeping through the bathroom door. 

You open the bathroom door and see the horrific sight of your wife who took her life in the bathtub.`,
    choices: [{ text: "Continue", next: "day4p2_skip_then_day3" }],
  },

  day4p2_skip_then_day3: {
    title:
      "In 3 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `Your daughter asks where her mommy is. You couldn’t answer her. Instead, you let her ride on your back and take her to work with you. 

Your wife is buried outside the house.

You took your daughter with you to work. You work hard at the laboratory with her beside you.`,
    choices: [{ text: "Continue", next: "day_2" }],
  },

  day4p3_skip_then_day3: {
    tag: "SCENE",
    text: `You went home and spent the rest of the day with your family. Your wife appreciates your decision.`,
    choices: [{ text: "Continue", next: "day3_choice" }],
  },

  day_2: {
    title:
      "In 2 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `Your daughter is in the hallway of your home.

What do you do?`,
    choices: [
      { text: "A. Go Take her to work with you", next: "ending5" },
      { text: "B. Take her to the park", next: "ending4_park_last_two_days" },
    ],
  },

  day3_choice: {
    title:
      "In 3 days, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `Your wife tells you to grab today’s newspaper and advises you to come back home. You notice that your surroundings are dull. The virus has reached your home.

It says that 50% of planet earth would be dead by morning. Scientists predict that by saturday morning, half of the population would be dead.

You then notice a car in the distance. Its your boss and your co-workers, or the remaining of them. They say that they need you in the lab, that they were onto something. But would understand if you wished to spend the day with your family instead.

What do you do?`,
    choices: [
      { text: "A. Go to work", next: "annie_hallway" },
      { text: "B. Go home with your family.", next: "day2_jim" },
    ],
  },

  day2_jim: {
    title:
      "In 2 days, every single living cell on Planet Earth will be dead. You have one chance. ",
    tag: "SCENE",
    text: `
Your wife pretends to be asleep as you slip out from bed and head to work.

You arrive at work. You find a twitching man in the hallway, holding a bloodied knife. Seemingly killed the rest of the staff. It was Jim. He rushes at you, but you defend yourself and successfully disarm him. Jim cowardly runs out of the building.

You find yourself alone in the lab, working to find a way to find a cure.

After spending the entire day working, you come home late at night. Something’s not right.

You enter your home. You’re welcomed with a gruesome sight of your wife in the pool of her own blood, having been murdered. You rush to your daughter’s room. You see her lay in bed, in a pool of her own blood. Your family is dead.

You go to the bedroom, only to see the aftermath of Jim taking his own life.`,
    choices: [{ text: "Continue", next: "day1_annie" }],
  },

  day1_annie: {
    title:
      "In 1 day, every single living cell on Planet Earth will be dead. You have one chance.",
    tag: "SCENE",
    text: `You feel your body weaken. The virus slowly eating you alive. 

You bury your family outside. 

Everything around you is dying.

What do you do?`,
    choices: [
      { text: "A. Go to work", next: "day1_work_choice" },
      { text: "B. Go to the park", next: "ending2_park" },
    ],
  },

  day1_work_choice: {
    title: "Back to the lab",
    tag: "SCENE",
    text: `You arrive at work. 

You see your colleagues’ murdered by Jim.

What do you do?`,
    choices: [
      { text: "A. Work", next: "ending1_work_result" },
      { text: "B. Give up", next: "ending3Giveup_result" },
    ],
  },

  ending1_work_result: {
    tag: "ENDING 1",
    text: `You try your best to work on the cure. 
    
Ultimately, your sickness catches up to you and your body gives up. 
    
Making humanity a thing of the past.`,
    choices: [],
  },

  ending3Giveup_result: {
    tag: "ENDING 3",
    text: `You end up giving up. 
    
You sit in the lab, waiting for the end to come. 
    
You die alone, with your work unfinished. 
    
Humanity is a thing of the past.`,
    choices: [],
  },

  ending2_park: {
    tag: "ENDING 2",
    text: `You arrive at the park. 

You imagine your daughter with you.

You sit on the bench. 

You take your last breath and close your eyes.`,
    choices: [],
  },

  // Annie branch (verbatim block; placed as its own node so you can link it wherever you want)
  annie_hallway: {
    title: "ANNIE",
    tag: "SCENE",
    text: `You arrive at work. 

You see Annie in the hallway. 

She confesses her deep admiration towards you.

She shamelessly asks you if maybe you could leave work and have an affair.

What do you do?`,
    choices: [
      { text: "A. Accept", next: "betrayed_family_left" },
      { text: "B. Reject", next: "day2_jim" },
    ],
  },

  betrayed_family_left: {
    title: "Betrayal",
    tag: "SCENE",
    text: `You arrive home late at night. 

Your wife confronts you as soon as you enter the bedroom. 

You didn’t answer her calls. 

She knew about what you’ve done. 

She took your daughter and went home to her parents, feeling incredibly betrayed in these hard times. 

Your family has left you.`,
    choices: [{ text: "Continue", next: "day1_work_choice" }],
  },

  ending4_park_last_two_days: {
    tag: "ENDING 4",
    text: `You spend the last two days with your daughter in the park. 

Both of you peacefully let time pass as you sat on the bench. 

Taking your final breath.`,
    choices: [],
  },

  ending5: {
    tag: "ENDING 5",
    text: `You take your daughter to work. Motivated to work hard to save her.

She doesn’t have the energy to move anymore, her skin pale, her breathing slow. You set her down and reassure her that you’ll be right back.  Your body is exhausted but you drag yourself to the laboratory. You can’t give up now.

After hours of hard work, you finally found the cure!

You’ve saved your daughter and yourself.`,
    choices: [],
  },

  notes: {
    title: "NOTES",
    tag: "NOTES",
    text: `NOTES:
Missing even one day of work will lead to a bad ending

Working everyday will end to ending 5`,
    choices: [],
  },
};
