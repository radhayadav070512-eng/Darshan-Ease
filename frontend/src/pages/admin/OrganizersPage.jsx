// src/pages/admin/OrganizersPage.jsx
import { adminOrganizers } from '../../data/adminOrganizers';

function OrganizersPage() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#4a148c', marginBottom: '10px' }}>Manage Organizers</h1>
      <p style={{ color: '#555', marginBottom: '30px' }}>All temple organizers (total: {adminOrganizers.length})</p>

      <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
          <thead>
            <tr style={{ backgroundColor: '#4a148c', color: 'white' }}>
              <th style={tableHeader}>ID</th>
              <th style={tableHeader}>Organizer Name</th>
              <th style={tableHeader}>Temple</th>
              <th style={tableHeader}>Contact</th>
              <th style={tableHeader}>Registered</th>
              <th style={tableHeader}>Temples Managed</th>
              <th style={tableHeader}>Status</th>
              <th style={tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminOrganizers.map((org) => (
              <tr key={org.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tableCell}>{org.id}</td>
                <td style={tableCell}>{org.name}</td>
                <td style={tableCell}>{org.temple}</td>
                <td style={tableCell}>
                  {org.email}<br />
                  <small style={{ color: '#666' }}>{org.phone}</small>
                </td>
                <td style={tableCell}>{org.registered}</td>
                <td style={tableCell}>{org.templesManaged}</td>
                <td style={{
                  ...tableCell,
                  color: org.status === 'Approved' ? 'green' : org.status === 'Pending' ? 'orange' : 'red',
                  fontWeight: 'bold'
                }}>
                  {org.status}
                </td>
                <td style={tableCell}>
                  {org.status === 'Pending' && (
                    <>
                      <button
                        style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', marginRight: '8px', cursor: 'pointer' }}
                        onClick={() => alert(`Approve ${org.name} (fake action)`)}
                      >
                        Approve
                      </button>
                      <button
                        style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                        onClick={() => alert(`Reject ${org.name} (fake action)`)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {org.status === 'Approved' && (
                    <button
                      style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                      onClick={() => alert(`Block ${org.name} (fake action)`)}
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
        (Static list — real version would have search, pagination, approve/reject backend calls)
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

export default OrganizersPage;