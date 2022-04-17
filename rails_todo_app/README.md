# Rails TODO app example

Concepts:

- [bundler](https://bundler.io/guides/rails.html) - a consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed.

Structure

- `app` - Contains the controllers, models, views, helpers, mailers, channels, jobs, and assets for your application
- `bin` - Contains the rails script that starts your app and can contain other scripts you use to set up, update, deploy, or run your application.
- `config` - Contains configuration for your application's routes, database, and more.
- `db` - Contains your current database schema, as well as the database migrations.
- `Gemfile` - These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem.
- `lib` - Extended modules for your application.
- `log` - Application log files.
- `public` - Contains static files and compiled assets. When your app is running, this directory will be exposed as-is.
- `Rakefile` - This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing Rakefile, you should add your own tasks by adding files to the lib/tasks directory of your application.
- `storage` - Active Storage files for Disk Service
- `test` - Unit tests, fixtures, and other test apparatu
- `tmp` - Temporary files (like cache and pid files).
- `vendor` - A place for all third-party code. In a typical Rails application this includes vendored gems.

Other things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...
