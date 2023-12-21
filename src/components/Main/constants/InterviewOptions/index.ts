export type Options = {
  role: {
    [key: string]: string;
  };
  occasion: {
    [key: string]: string;
  };
  length: {
    [key: string]: string;
  };
};

export const options: Options = {
  role: {
    bride: 'Bride',
    groom: 'Groom',
    officiant: 'Officiant',
    maid: 'Maid of Honor',
    man: 'Best Man',
    parentB: 'Parent of the Bride',
    parentG: 'Parent of the Groom',
    other: 'Other',
  },
  occasion: {
    ceremony: 'Wedding Ceremony',
    rehearsal: 'Rehearsal Dinner',
    vows: 'Wedding Vows',
    welcome: 'Welcome Speech',
    thankYou: 'Thank You Speech',
    other: 'Other',
  },
  length: {
    short: 'Short (1-2 minutes)',
    medium: 'Medium (3-4 minutes)',
    long: 'Long (5+ minutes)',
  },
};

export const INTERVIEW_OPTIONS = [
  {
    id: 1,
    label: 'Your Role in the Wedding',
    name: 'role',
    type: 'dropdown',
    options: options.role,
    tooltipContent:
      'Wedding Wordsmith will ask questions relevant to your role in the wedding.',
  },
  {
    id: 2,
    label: 'Occasion',
    name: 'occasion',
    type: 'dropdown',
    options: options.occasion,
    tooltipContent:
      'Wedding Wordsmith will craft the details of your speech based on the theme or occasion.',
  },
  {
    id: 3,
    label: 'Length of Speech',
    name: 'length',
    type: 'dropdown',
    options: options.length,
    tooltipContent:
      'Wedding Wordsmith will limit how long of a speech it outputs.',
  },
  {
    id: 4,
    label: 'OpenAI API Key',
    name: 'apiKey',
    type: 'input',
    tooltipContent:
      'Click <a href="https://platform.openai.com/account/api-keys" target="_blank" rel="noopener noreferrer" style="color:#9FA6FC">here</a> to get your API key.\n\nDont have an OpenAI account? <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer" style="color:#9FA6FC">Create</a> a new account and get free trial tokens.\n\nNOTE :\n- Your API key will only be required when submitting your interview answer so feel free to try out the interview first.\n\n- API keys are not used or stored and are only used for feedback requests.',
  },
];
