import Vue from 'vue'
import Router from 'vue-router'

// content
import FullContent from '@/components/layout/Content'

// home page
import Dashboard from '@/components/dashboard/Dashboard'

// login page
import Login from '@/components/login/Login'

// preferences
import Preferences from '@/components/preferences/Preferences'
import Settings from '@/components/preferences/Settings'
import Collaborators from '@/components/preferences/Collaborators'
import Billings from '@/components/preferences/Billings'

// Plugins
import Plugins from '@/components/plugins/Plugins'
import Categories from '@/components/plugins/Categories'
import Databases from '@/components/plugins/Databases'
import Code from '@/components/plugins/Code'
import EvenServers from '@/components/plugins/EvenServers'
import OAuthServers from '@/components/plugins/OAuthServers'
import IdentityServers from '@/components/plugins/IdentityServers'
import MailServers from '@/components/plugins/MailServers'

// app 14
import App14Layout from '@/components/app14/App14Layout'
import Apps from '@/components/app14/Apps'
import Users from '@/components/app14/Users'
import Themes from '@/components/app14/Themes'
import Setup from '@/components/app14/Setup'

// app 23
import App23Layout from '@/components/app23/App23Layout'

// ba-24
import BA24 from '@/components/ba-24/ba24'

// ba-29
import BA29 from '@/components/ba-29/ba29'

// fr-37
import FR37 from '@/components/fr-37/fr37'

// ba-25
import BA25 from '@/components/ba-25/ba25'
import Rest from '@/components/ba-25/rest'
import Cron from '@/components/ba-25/cron'
import EventBA25 from '@/components/ba-25/event'

// ba-26
import BA26 from '@/components/ba-26/ba26'

// password
import ForgotPassword from '@/components/password/ForgotPassword'
import ChangePassword from '@/components/password/ChangePassword'

// signup
import SignupEmail from '@/components/signup/Email'
import SignupDetails from '@/components/signup/Details'
import SignupConfirmation from '@/components/signup/Confirmation'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      component: FullContent,
      children: [
        {
          path: '',
          name: 'Dasboard',
          component: Dashboard
        },
        {
          path: 'databases-form',
          component: Databases
        },
        {
          path: 'ba-24',
          name: 'Ba24',
          component: BA24
        },
        {
          path: 'ba-29',
          name: 'Ba29',
          component: BA29
        },
        {
          path: 'fr-37',
          name: 'FR37',
          component: FR37
        },
        {
          path: 'ba-25',
          name: 'Ba25',
          redirect: '/ba-25/rest',
          component: BA25,
          children: [
            {
              path: 'rest',
              name: 'Rest',
              component: Rest
            },
            {
              path: 'cron',
              name: 'Cron',
              component: Cron
            },
            {
              path: 'event',
              name: 'Event',
              component: EventBA25
            },
            {
              path: 'add-trigger',
              name: 'Add Trigger',
              component: BA26
            }
          ]
        },
        {
          path: 'plugins',
          redirect: '/plugins/databases',
          component: Plugins,
          children: [
            {
              path: 'databases',
              name: 'Databases',
              component: Categories
            },
            {
              path: 'code',
              name: 'Code',
              component: Code
            },
            {
              path: 'even-servers',
              name: 'EvenServers',
              component: EvenServers
            },
            {
              path: 'mail-servers',
              name: 'MailServers',
              component: MailServers
            },
            {
              path: 'oauth-servers',
              name: 'OAuthServers',
              component: OAuthServers
            },
            {
              path: 'identity-servers',
              name: 'IdentityServers',
              component: IdentityServers
            }
          ]
        },
        {
          path: 'preferences',
          redirect: '/preferences/settings',
          component: Preferences,
          children: [
            {
              path: 'settings',
              name: 'Settings',
              component: Settings
            },
            {
              path: 'password',
              name: 'Password',
              component: ChangePassword
            },
            {
              path: 'collaborators',
              name: 'Collaborators',
              component: Collaborators
            },
            {
              path: 'billings',
              name: 'Billings',
              component: Billings
            }
          ]
        }
        
      ]
    },
    {
      path: '/app-14',
      redirect: '/app-14/apps',
      component: App14Layout,
      children: [
        {
          path: 'apps',
          name: 'Apps',
          component: Apps
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
        {
          path: 'themes',
          name: 'Themes',
          component: Themes
        },
        {
          path: 'setup',
          name: 'Setup',
          component: Setup
        }
      ]
    },
    {
      path: '/app-23',
      name: 'App23',
      component: App23Layout
    },
    {
      path: '/signup-email',
      name: 'Signup Email',
      component: SignupEmail
    },
    {
      path: '/signup-details',
      name: 'Signup Details',
      component: SignupDetails
    },
    {
      path: '/signup-confirmation',
      name: 'Signup via App',
      component: SignupConfirmation
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'Forgot Password',
      component: ForgotPassword
    },
    {
      path: '/change-password',
      name: 'Change Password',
      component: ChangePassword
    },
  ]
})
