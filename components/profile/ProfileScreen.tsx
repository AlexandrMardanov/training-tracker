import { ScreenContainer } from '../shared/ScreenContainer';
import { EditNameModal } from './components/EditNameModal';
import { ProfileInfo } from './components/ProfileInfo';
import { useProfileEdit } from './hooks/useProfileEdit';

export function ProfileScreen() {
  const { name, setName, isModalVisible, isSaving, handleSaveName, handleCancelEdit, openModal, user } =
    useProfileEdit();

  return (
    <ScreenContainer>
      <ProfileInfo name={name} email={user?.email || ''} onEditPress={openModal} />
      <EditNameModal
        visible={isModalVisible}
        name={name}
        onChangeName={setName}
        onSave={handleSaveName}
        onCancel={handleCancelEdit}
        isSaving={isSaving}
      />
    </ScreenContainer>
  );
}
