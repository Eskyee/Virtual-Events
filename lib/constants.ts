/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://junglelab.live';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'junglelab_io';
export const BRAND_NAME = 'JUNGLELABᵀᴹ';
export const SITE_NAME_MULTILINE = ['JUNGLELABᵀᴹ', 'Virtual Live Events'];
export const SITE_NAME = 'JUNGLELABᵀᴹ Virtual Live Events';
export const META_DESCRIPTION =
  'JungleLab is an artist-driven Digital Assets Marketplace. Making it easy for digital creators to authenticate, showcase and sell the digital assets they produce on the Liquid Blockchain.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'Virtual Live Events , Global';
export const SHORT_DATE = 'OCT 28-29 - 9:00am PST';
export const FULL_DATE = 'OCT 28-29 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://sedate-ticket-9a3.notion.site/Code-of-Conduct-Example-bcc17e6ec2ff4314bfd58d012640fe9d';
export const REPO = 'https://junglelab.net';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'JungleLabᵀᴹ',
    route: '/stage/c'
  },
  {
    name: 'Jan3',
    route: '/stage/m'
  },
  {
    name: 'Raretoshi',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
