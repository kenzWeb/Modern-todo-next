#!/bin/bash

# Массив сообщений коммитов
commit_messages=(
  "Initialize project structure"
  "Add basic todo-list components"
  "Implement task addition feature"
  "Add task completion functionality"
  "Fix bug in task completion logic"
  "Refactor codebase for better readability"
  "Add unit tests for task addition"
  "Implement task deletion feature"
  "Fix CSS styling issues"
  "Add documentation for API endpoints"
)

# Даты коммитов в формате YYYY-MM-DD HH:MM:SS
commit_dates=(
  "2023-02-01 09:00:00"
  "2023-02-03 11:15:00"
  "2023-02-05 14:30:00"
  "2023-02-07 10:00:00"
  "2023-02-09 16:45:00"
  "2023-02-11 13:20:00"
  "2023-02-13 09:50:00"
  "2023-02-15 15:30:00"
  "2023-02-17 18:05:00"
  "2023-02-19 12:40:00"
)

# Сброс HEAD к первому коммиту
git reset --soft $(git rev-list --max-parents=0 HEAD)

# Цикл по массивам и создание коммитов
for i in ${!commit_messages[@]}; do
  export GIT_COMMITTER_DATE="${commit_dates[i]}"
  export GIT_AUTHOR_DATE="${commit_dates[i]}"
  git commit --amend --no-edit --date "${commit_dates[i]}" -m "${commit_messages[i]}"
done

# Убедитесь, что все изменения включены в последний коммит
git add .
git commit -m "Final commit before push"

echo "Commits created with fake dates."
