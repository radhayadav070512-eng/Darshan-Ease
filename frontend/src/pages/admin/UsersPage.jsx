// src/pages/admin/UsersPage.jsx
import { adminUsers } from '../../data/adminUsers';

function UsersPage() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#4a148c', marginBottom: '10px' }}>Manage Users</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>All registered devotees (total: {adminUsers.length})</p>

      <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
          <thead>
            <tr style={{ backgroundColor: '#4a148c', color: 'white' }}>
              <th style={tableHeader}>ID</th>
              <th style={tableHeader}>Name</th>
              <th style={tableHeader}>Email / Phone</th>
              <th style={tableHeader}>Registered</th>
              <th style={tableHeader}>Bookings</th>
              <th style={tableHeader}>Status</th>
              <th style={tableHeader}>Last Login</th>
              <th style={tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tableCell}>{user.id}</td>
                <td style={tableCell}>{user.name}</td>
                <td style={tableCell}>
                  {user.email}<br />
                  <small style={{ color: '#666' }}>{user.phone}</small>
                </td>
                <td style={tableCell}>{user.registered}</td>
                <td style={tableCell}>{user.bookingsCount}</td>
                <td style={{
                  ...tableCell,
                  color: user.status === 'Active' ? 'green' : 'red',
                  fontWeight: 'bold'
                }}>
                  {user.status}
                </td>
                <td style={tableCell}>{user.lastLogin}</td>
                <td style={tableCell}>
                  <button
                    style={{
                      backgroundColor: user.status === 'Active' ? '#f44336' : '#4caf50',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '8px'
                    }}
                    onClick={() => alert(`Toggle status for ${user.name} (fake action)`)}
                  >
                    {user.status === 'Active' ? 'Block' : 'Unblock'}
                  </button>
                  <button
                    style={{
                      backgroundColor: '#2196f3',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                    onClick={() => alert(`View details for ${user.name} (fake)`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
        (This is a static list — in real app, add pagination, search, and filters)
      </p>
    </div>
  );
}

const tableHeader = {
  padding: '12px',
  textAlign: 'left',
  fontWeight: 'bold'
};

const tableCell = {
  padding: '12px',
  textAlign: 'left'
};

export default UsersPage;