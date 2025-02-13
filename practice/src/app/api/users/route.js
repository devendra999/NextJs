// app/api/users/route.js

let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', username: 'john', password: 'test@123' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', username: 'jane', password: 'test@123' }
  ];
  
  // Create a new user
  export async function POST(request) {
    try {
      const { name, email, username, password } = await request.json();
      
      if (!name || !email || !username || !password) {
        return new Response('Name and email are required.', { status: 400 });
      }
  
      const newUser = {
        id: users.length + 1,  // Simple ID generation
        name,
        email,
        username,
        password
      };
  
      users.push(newUser);
  
      return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
      return new Response('Failed to create user.', { status: 500 });
    }
  }
  
// Get all users or a single user by ID
export async function GET(request) {
  try {
    // Extract the path and check if an ID is provided
    console.log(request, '');
    const url = new URL(request.url);
    console.log(url, 'userId');
    const pathParts = url.pathname.split('/');  // Split the URL path into parts
    // Check if the URL path has an 'id' at the end (e.g., /api/users/1)
    const userId = pathParts[pathParts.length - 1];
    
    // If userId exists and is not empty, we are fetching a single user by ID
    if (userId && !isNaN(userId)) {
      const user = users.find(u => u.id === parseInt(userId));

      if (!user) {
        return new Response('User not found.', { status: 404 });
      }

      return new Response(JSON.stringify(user), { status: 200 });
    }

    // If no userId is provided, return all users
    return new Response(JSON.stringify(users), { status: 200 });

  } catch (error) {
    return new Response('Failed to fetch user(s).', { status: 500 });
  }
}


  
  // Update an existing user
  export async function PUT(request) {
    try {
      const { id, name, email, username, password } = await request.json();
      
      if (!id || !name || !email || !username || !password) {
        return new Response('ID, name, and email are required.', { status: 400 });
      }
  
      const userIndex = users.findIndex(user => user.id === id);
      
      if (userIndex === -1) {
        return new Response('User not found.', { status: 404 });
      }
  
      users[userIndex] = { id, name, email, username, password };
  
      return new Response(JSON.stringify(users[userIndex]), { status: 200 });
    } catch (error) {
      return new Response('Failed to update user.', { status: 500 });
    }
  }
  
  // Delete a user by ID
  export async function DELETE(request) {
    try {
      const { id } = await request.json();
      
      if (!id) {
        return new Response('ID is required.', { status: 400 });
      }
  
      const userIndex = users.findIndex(user => user.id === id);
      
      if (userIndex === -1) {
        return new Response('User not found.', { status: 404 });
      }
  
      users.splice(userIndex, 1);
  
      return new Response('User deleted successfully.', { status: 200 });
    } catch (error) {
      return new Response('Failed to delete user.', { status: 500 });
    }
  }
  