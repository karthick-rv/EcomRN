import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

class AuthService {
  static async signUp(email: string, password: string): Promise<AuthResponse> {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User signed up:', userCredential.user);
      return {user: userCredential.user, error: null};
    } catch (error) {
      if (error instanceof Error) {
        console.log('Signup error:', error.message);
        return {user: null, error: error.message};
      }
      return {user: null, error: null};
    }
  }

  // Sign in
  static async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('User signed in:', userCredential.user);
      return {user: userCredential.user, error: null};
    } catch (error) {
      if (error instanceof Error) {
        return {user: null, error: error.message};
      }
      return {user: null, error: null};
    }
  }

  // Sign out
  static async signOut() {
    try {
      await auth().signOut();
      console.log('User signed out');
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthService;

export interface AuthResponse {
  user: FirebaseAuthTypes.User | null;
  error: string | null;
}
