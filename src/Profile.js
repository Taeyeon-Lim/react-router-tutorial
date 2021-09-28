const profileData = {
  taeyeon: {
    name: 'taeyeonLim',
    description: 'Frontend Engineer',
  },
  sourcetree: {
    name: '소스트리',
    description: 'git을 GUI 형태로 사용하게 해주는 프로그램',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>선택된 사용자가 없습니다</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
