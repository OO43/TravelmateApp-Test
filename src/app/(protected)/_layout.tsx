import { Redirect, Stack } from 'expo-router';

import { COLORS } from '@/constants/theme';
import { useTravelmateStore } from '@/state/TravelmateStore';

export default function ProtectedLayout() {
  const { session } = useTravelmateStore();
  if (!session) return <Redirect href="/login" />;

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: COLORS.cream } }}>
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="journey-planner" />
      <Stack.Screen name="journey-status" />
      <Stack.Screen name="ticket-scanner" options={{ presentation: 'fullScreenModal' }} />
      <Stack.Screen name="profile" />
      <Stack.Screen name="feedback" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
