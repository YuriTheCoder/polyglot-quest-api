#!/usr/bin/env python3
"""
Gamified Task Management API - gRPC Client Example (Python)

This example demonstrates how to use the gRPC API for high-performance
communication with the Gamified Task Management system.

Requirements:
    pip install grpcio grpcio-tools

Usage:
    python examples/grpc_client_python.py
"""

import grpc
import sys
import os
from datetime import datetime, timedelta

# Add the proto directory to the path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'clients', 'grpc', 'python'))

# Import generated gRPC modules
import gamified_tasks_pb2
import gamified_tasks_pb2_grpc


class GamifiedTasksGrpcClient:
    """High-performance gRPC client for Gamified Tasks API"""
    
    def __init__(self, host='localhost', port=50051):
        self.channel = grpc.insecure_channel(f'{host}:{port}')
        
        # Create service stubs
        self.auth_stub = gamified_tasks_pb2_grpc.AuthServiceStub(self.channel)
        self.task_stub = gamified_tasks_pb2_grpc.TaskServiceStub(self.channel)
        self.gamification_stub = gamified_tasks_pb2_grpc.GamificationServiceStub(self.channel)
        self.admin_stub = gamified_tasks_pb2_grpc.AdminServiceStub(self.channel)
        
        self.token = None
    
    def register_user(self, name, email, password):
        """Register a new user"""
        request = gamified_tasks_pb2.RegisterUserRequest(
            name=name,
            email=email,
            password=password
        )
        
        try:
            response = self.auth_stub.RegisterUser(request)
            if response.success:
                self.token = response.token
                print(f"✅ User registered: {response.user.name}")
                return response
            else:
                print(f"❌ Registration failed: {response.message}")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def login_user(self, email, password):
        """Login user and get authentication token"""
        request = gamified_tasks_pb2.LoginUserRequest(
            email=email,
            password=password
        )
        
        try:
            response = self.auth_stub.LoginUser(request)
            if response.success:
                self.token = response.token
                print(f"✅ User logged in: {response.user.name}")
                return response
            else:
                print(f"❌ Login failed: {response.message}")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def create_task(self, title, description, priority='medium', tags=None):
        """Create a new task"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        due_date = (datetime.now() + timedelta(days=7)).isoformat()
        
        request = gamified_tasks_pb2.CreateTaskRequest(
            token=self.token,
            title=title,
            description=description,
            priority=priority,
            due_date=due_date,
            tags=tags or []
        )
        
        try:
            response = self.task_stub.CreateTask(request)
            if response.success:
                print(f"✅ Task created: {response.task.title}")
                return response
            else:
                print(f"❌ Task creation failed: {response.message}")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def list_tasks(self, page=1, limit=10, status=None):
        """List user tasks with pagination"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        request = gamified_tasks_pb2.ListTasksRequest(
            token=self.token,
            page=page,
            limit=limit,
            status=status or ''
        )
        
        try:
            response = self.task_stub.ListTasks(request)
            if response.success:
                print(f"✅ Found {len(response.tasks)} tasks")
                for task in response.tasks:
                    print(f"  - {task.title} ({task.status})")
                return response
            else:
                print("❌ Failed to list tasks")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def complete_task(self, task_id):
        """Complete a task and earn XP"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        request = gamified_tasks_pb2.CompleteTaskRequest(
            token=self.token,
            task_id=task_id
        )
        
        try:
            response = self.task_stub.CompleteTask(request)
            if response.success:
                print(f"✅ Task completed: {response.task.title}")
                return response
            else:
                print(f"❌ Task completion failed: {response.message}")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def get_gamification_dashboard(self):
        """Get user's gamification dashboard"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        request = gamified_tasks_pb2.GetGamificationDashboardRequest(
            token=self.token
        )
        
        try:
            response = self.gamification_stub.GetGamificationDashboard(request)
            if response.success:
                user = response.user
                stats = response.stats
                print(f"✅ Dashboard data:")
                print(f"  Level: {user.gamification.level}")
                print(f"  Total XP: {user.gamification.total_xp}")
                print(f"  Current Streak: {user.gamification.current_streak}")
                print(f"  Tasks Completed: {stats.tasks_completed}")
                print(f"  Stories Created: {stats.stories_created}")
                return response
            else:
                print("❌ Failed to get dashboard")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def get_leaderboard(self, limit=5):
        """Get global leaderboard"""
        request = gamified_tasks_pb2.GetLeaderboardRequest(
            limit=limit
        )
        
        try:
            response = self.gamification_stub.GetLeaderboard(request)
            if response.success:
                print(f"✅ Leaderboard (Top {limit}):")
                for i, entry in enumerate(response.leaderboard, 1):
                    print(f"  {i}. {entry.name} - Level {entry.level} ({entry.total_xp} XP)")
                return response
            else:
                print("❌ Failed to get leaderboard")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def create_story_from_tasks(self, task_ids, character_class='warrior', story_theme='fantasy'):
        """Generate AI story from tasks"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        user_preferences = gamified_tasks_pb2.UserPreferences(
            character_class=character_class,
            story_theme=story_theme
        )
        
        request = gamified_tasks_pb2.CreateStoryFromTasksRequest(
            token=self.token,
            task_ids=task_ids,
            user_preferences=user_preferences
        )
        
        try:
            response = self.gamification_stub.CreateStoryFromTasks(request)
            if response.success:
                print(f"✅ Story created: {response.story.title}")
                print(f"  Theme: {response.story.theme}")
                print(f"  Total XP: {response.story.total_xp}")
                print(f"  Quests: {len(response.quests)}")
                return response
            else:
                print(f"❌ Story creation failed: {response.message}")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def get_task_stats(self):
        """Get task statistics"""
        if not self.token:
            print("❌ Not authenticated. Please login first.")
            return None
        
        request = gamified_tasks_pb2.GetTaskStatsRequest(
            token=self.token
        )
        
        try:
            response = self.task_stub.GetTaskStats(request)
            if response.success:
                stats = response.stats
                completion_rate = stats.completion_rate * 100
                print(f"✅ Task Statistics:")
                print(f"  Total: {stats.total}")
                print(f"  Completed: {stats.completed}")
                print(f"  Pending: {stats.pending}")
                print(f"  In Progress: {stats.in_progress}")
                print(f"  Completion Rate: {completion_rate:.1f}%")
                return response
            else:
                print("❌ Failed to get task stats")
                return None
        except grpc.RpcError as e:
            print(f"❌ gRPC Error: {e.details()}")
            return None
    
    def close(self):
        """Close the gRPC channel"""
        self.channel.close()


async def demonstrate_grpc_performance():
    """Demonstrate gRPC performance benefits"""
    import time
    
    client = GamifiedTasksGrpcClient()
    
    print("🚀 Starting gRPC Performance Demo\n")
    
    # Register and login
    print("1. User Registration & Login...")
    start_time = time.time()
    
    client.register_user("Jane Doe", "jane@example.com", "password123")
    login_time = time.time() - start_time
    print(f"   ⏱️  Login time: {login_time*1000:.1f}ms\n")
    
    # Create multiple tasks quickly
    print("2. Bulk Task Creation...")
    start_time = time.time()
    
    task_ids = []
    for i in range(5):
        response = client.create_task(
            f"gRPC Task {i+1}",
            f"High-performance task creation via gRPC - Task {i+1}",
            priority="high",
            tags=["grpc", "performance", "demo"]
        )
        if response:
            task_ids.append(response.task.id)
    
    creation_time = time.time() - start_time
    print(f"   ⏱️  Created 5 tasks in: {creation_time*1000:.1f}ms\n")
    
    # List tasks
    print("3. Task Listing...")
    start_time = time.time()
    client.list_tasks(limit=10)
    list_time = time.time() - start_time
    print(f"   ⏱️  List time: {list_time*1000:.1f}ms\n")
    
    # Complete tasks
    print("4. Task Completion...")
    start_time = time.time()
    for task_id in task_ids[:3]:  # Complete first 3 tasks
        client.complete_task(task_id)
    completion_time = time.time() - start_time
    print(f"   ⏱️  Completed 3 tasks in: {completion_time*1000:.1f}ms\n")
    
    # Get dashboard
    print("5. Gamification Dashboard...")
    start_time = time.time()
    client.get_gamification_dashboard()
    dashboard_time = time.time() - start_time
    print(f"   ⏱️  Dashboard time: {dashboard_time*1000:.1f}ms\n")
    
    # Get leaderboard
    print("6. Leaderboard...")
    start_time = time.time()
    client.get_leaderboard()
    leaderboard_time = time.time() - start_time
    print(f"   ⏱️  Leaderboard time: {leaderboard_time*1000:.1f}ms\n")
    
    # Create story
    print("7. AI Story Generation...")
    start_time = time.time()
    client.create_story_from_tasks(task_ids[:3], "mage", "sci-fi")
    story_time = time.time() - start_time
    print(f"   ⏱️  Story generation time: {story_time*1000:.1f}ms\n")
    
    # Get statistics
    print("8. Task Statistics...")
    start_time = time.time()
    client.get_task_stats()
    stats_time = time.time() - start_time
    print(f"   ⏱️  Stats time: {stats_time*1000:.1f}ms\n")
    
    # Performance summary
    total_time = (login_time + creation_time + list_time + 
                  completion_time + dashboard_time + leaderboard_time + 
                  story_time + stats_time)
    
    print("📊 Performance Summary:")
    print(f"   Total operations: 8")
    print(f"   Total time: {total_time*1000:.1f}ms")
    print(f"   Average per operation: {(total_time/8)*1000:.1f}ms")
    print(f"   Operations per second: {8/total_time:.1f}")
    
    client.close()
    print("\n🎉 gRPC Performance Demo completed!")


def main():
    """Main demonstration function"""
    print("🎮 Gamified Task Management API - gRPC Client Demo")
    print("=" * 60)
    
    # Run the performance demo
    import asyncio
    asyncio.run(demonstrate_grpc_performance())


if __name__ == "__main__":
    main() 