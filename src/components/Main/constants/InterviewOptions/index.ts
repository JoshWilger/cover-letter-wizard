export type Options = {
  field: {
    [key: string]: string;
  };
  experience: {
    [key: string]: string;
  };
};

export const options: Options = {
  field: {
    fe: 'Front-end',
    be: 'Back-end',
    fullstack: 'Fullstack',
  },
  experience: {
    starter: 'In school / Studying',
    junior: 'Junior',
    senior: 'Senior',
  },
};

export const INTERVIEW_OPTIONS = [
  {
    id: 1,
    label: 'Development Field',
    name: 'field',
    type: 'dropdown',
    options: options.field,
    tooltipContent:
      'Tech Interview GPT will ask questions relevant to your development field.',
  },
  {
    id: 2,
    label: 'Work Experience',
    name: 'experience',
    type: 'dropdown',
    options: options.experience,
    tooltipContent:
      'Tech Interview GPT will provide feedback and follow up questions based on your work experience.',
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
