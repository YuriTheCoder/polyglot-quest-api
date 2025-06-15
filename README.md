# 🎮 Polyglot Quest API: Gamified Task Management

An advanced, gamified task management API designed for a polyglot environment. This project transforms productivity into an engaging RPG, complete with AI-generated stories, a robust leveling system, and comprehensive SDKs for 9 programming languages, accessible via both REST and high-performance gRPC interfaces.

## 🌟 Core Features

- **Task Management**: Full CRUD operations for tasks, with priorities and due dates.
- **User Authentication**: Secure JWT-based authentication and user management.
- **Deep Gamification**: XP points, levels, badges, streaks, and competitive leaderboards.
- **AI Story Generation**: Dynamically creates engaging RPG quests from your tasks.
- **Polyglot SDKs**: Idiomatic clients for 9 major programming languages.
- **Dual Interfaces**: Choose between a flexible REST API and a high-performance gRPC server.
- **Interactive Documentation**: Explore the API with ReDoc and Swagger UI.
- **Admin Capabilities**: Endpoints for comprehensive user and system management.

---

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 4.4+
- Docker (optional, for easy setup)
- OpenAI API Key (for AI features)

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/YuriTheCoder/polyglot-quest-api.git
cd polyglot-quest-api

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI, JWT Secret, and OpenAI Key

# 4. Start the server
npm start

# The API is now live on http://localhost:3000
# The gRPC server is on http://localhost:50051
```

### Docker Deployment
For a one-command setup, use Docker Compose:
```bash
# This command builds the images and starts the API and database.
docker-compose up --build -d
```
---

## 🌐 Multi-Language SDKs and Usage

This project provides pre-built, idiomatic SDKs for 9 languages to ensure a seamless developer experience. The `clients/` directory contains the source for each.

<details>
<summary><strong>Click to view usage examples for all 9 languages</strong></summary>

### JavaScript/Node.js
```javascript
const { TasksApi, Configuration } = require('polyglot-quest-api/clients/javascript');

const config = new Configuration({ basePath: 'http://localhost:3000', accessToken: 'YOUR_JWT' });
const tasksApi = new TasksApi(config);
const tasks = await tasksApi.listTasks();
```

### Python
```python
from polyglot_quest_api.clients.python import TasksApi, Configuration

config = Configuration(host='http://localhost:3000', access_token='YOUR_JWT')
tasks_api = TasksApi(config)
tasks = tasks_api.list_tasks()
```

### Java
```java
import com.polyglot.quest.api.client.api.TasksApi;
import com.polyglot.quest.api.client.ApiClient;

ApiClient client = new ApiClient();
client.setBasePath("http://localhost:3000");
client.setAccessToken("YOUR_JWT");

TasksApi tasksApi = new TasksApi(client);
List<Task> tasks = tasksApi.listTasks();
```

### Go
```go
package main
import (
    "context"
    "github.com/YuriTheCoder/polyglot-quest-api/clients/go"
)
func main() {
    config := client.NewConfiguration()
    config.Host = "localhost:3000"
    ctx := context.WithValue(context.Background(), client.ContextAccessToken, "YOUR_JWT")
    
    apiClient := client.NewAPIClient(config)
    tasks, _, _ := apiClient.TasksApi.ListTasks(ctx).Execute()
}
```

### C#
```csharp
using Polyglot.Quest.Api.Client.Api;
using Polyglot.Quest.Api.Client.Client;

var config = new Configuration { BasePath = "http://localhost:3000", AccessToken = "YOUR_JWT" };
var tasksApi = new TasksApi(config);
var tasks = await tasksApi.ListTasksAsync();
```

### Rust
```rust
use polyglot_quest_api_client::apis::{tasks_api, configuration::Configuration};

#[tokio::main]
async fn main() {
    let mut config = Configuration::new();
    config.base_path = "http://localhost:3000".to_string();
    config.bearer_access_token = Some("YOUR_JWT".to_string());
    
    let tasks = tasks_api::list_tasks(&config).await.unwrap();
}
```

### Kotlin
```kotlin
import com.polyglot.quest.api.client.apis.TasksApi
import com.polyglot.quest.api.client.infrastructure.ApiClient

val apiClient = ApiClient(baseUrl = "http://localhost:3000")
apiClient.setBearerToken("YOUR_JWT")

val tasksApi = TasksApi(apiClient)
val tasks = tasksApi.listTasks()
```

### Swift
```swift
import PolyglotQuestApiClient

TasksAPI.basePath = "http://localhost:3000"
TasksAPI.customHeaders["Authorization"] = "Bearer YOUR_JWT"

TasksAPI.listTasks { result in
    if case .success(let tasks) = result { print(tasks) }
}
```

### PHP
```php
<?php
require_once 'clients/php/vendor/autoload.php';

$config = GamifiedTasks\Client\Configuration::getDefaultConfiguration()
    ->setHost('http://localhost:3000')
    ->setAccessToken('YOUR_JWT');

$tasksApi = new GamifiedTasks\Client\Api\TasksApi(null, $config);
$tasks = $tasksApi->listTasks();
?>
```
</details>

---

## ⚡ gRPC High-Performance API

For applications requiring lower latency and higher throughput, use the gRPC interface defined in `proto/gamified_tasks.proto`.

### Starting the gRPC Server
```bash
# Start gRPC server (default port 50051)
npm run grpc:start
```

### gRPC Client Example (Python)
```python
import grpc
from clients.grpc.python import gamified_tasks_pb2, gamified_tasks_pb2_grpc

channel = grpc.insecure_channel('localhost:50051')
stub = gamified_tasks_pb2_grpc.TaskServiceStub(channel)

metadata = [('authorization', 'Bearer YOUR_JWT')]
response = stub.ListTasks(gamified_tasks_pb2.ListTasksRequest(page=1, limit=10), metadata=metadata)
print(response.tasks)
```

---

## 📚 API Documentation

### Interactive API Explorer
Explore the API interactively in your browser.
```bash
# Serve interactive Swagger UI docs at /api-docs
npm start 

# Serve beautiful ReDoc documentation
npm run docs:serve 
# Visit http://localhost:8080
```

A Postman collection is also available for quick testing: `collections/postman_collection.json`.

---

## 🎮 Gamification Deep Dive

<details>
<summary><strong>Click to expand the Gamification features</strong></summary>

### XP and Leveling System
- **Task Completion**: Earn XP based on task priority and complexity.
- **Streaks**: Gain bonus XP for completing tasks on consecutive days.
- **Level Progression**: Unlock new features and badges as you level up.

### Badge System
- **Task Master**: Complete 100 tasks.
- **Speed Demon**: Complete 10 tasks in a single day.
- **Streak Keeper**: Maintain a 30-day streak.
- **Storyteller**: Create 10 AI-generated stories.
- **Social Butterfly**: Share 50 achievements.

### AI Story Generation
Transform mundane tasks into epic adventures.
```javascript
// Example: Create an AI-generated story from your tasks
const story = await tasksApi.createStoryFromTasks({
  taskIds: ['task-id-1', 'task-id-2'],
  userPreferences: {
    characterClass: 'mage',
    storyTheme: 'sci-fi',
    difficulty: 'hard'
  }
});
console.log(story.narrative);
// "In the neon-drenched corridors of Neo-Productivia, the cyber-mage..."
```
</details>

---

## 🏗️ Architecture and Development

<details>
<summary><strong>Click to see Architecture, Scripts, and CI/CD details</strong></summary>

### System Overview
The system is built with a Node.js/Express/MongoDB backend, exposed via both a RESTful API and a high-performance gRPC interface. It follows a modular, service-oriented architecture.

### Key Components:
- **`src/`**: Main application source code.
- **`clients/`**: Contains the source code for the SDKs in all supported languages.
- **`proto/`**: Protocol Buffers definition for the gRPC API.
- **`docs/`**: Static documentation files.
- **`scripts/`**: Utility and build scripts.
- **`.github/workflows/`**: CI/CD and automation workflows.

### Available Scripts
```bash
# Run tests
npm test

# Lint the code
npm run lint

# Update API specification and clients
npm run spec:generate
npm run sdk:generate:all
npm run grpc:generate:all
```

### Automation and CI/CD
A robust GitHub Actions workflow handles continuous integration, testing across multiple Node.js versions, and security checks. The workflow is designed to keep all clients and documentation consistent with the core API contract.
</details>

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss your ideas or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Yuri - [https://github.com/YuriTheCoder](https://github.com/YuriTheCoder)

Project Link: [https://github.com/YuriTheCoder/polyglot-quest-api](https://github.com/YuriTheCoder/polyglot-quest-api)