import { describe, it, expect, beforeEach } from "vitest";
import { authService } from "./auth.service";

describe("authService", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should register a new user", () => {
    const result = authService.register(
      "John",
      "john@test.com",
      "123456"
    );

    expect(result.success).toBe(true);
    expect(result.user?.email).toBe("john@test.com");
  });

  it("should not register duplicate user", () => {
    authService.register("John", "john@test.com", "123");

    const result = authService.register(
      "John",
      "john@test.com",
      "123"
    );

    expect(result.success).toBe(false);
    expect(result.error).toBe("The user already exists");
  });

  it("should login existing user", () => {
    authService.register("John", "john@test.com", "123");

    const result = authService.login("john@test.com", "123");

    
    expect(result.success).toBe(true);
    expect(result.user?.email).toBe("john@test.com");
  });

  it("should fail login with wrong password", () => {
    authService.register("John", "john@test.com", "123");

    const result = authService.login("john@test.com", "wrong");

    expect(result.success).toBe(false);
  });

  it("should return current user after login", () => {
    authService.register("John", "john@test.com", "123");
    authService.login("john@test.com", "123");

    const user = authService.getCurrentUser();

    expect(user?.email).toBe("john@test.com");
  });

  it("should logout user", () => {
    authService.register("John", "john@test.com", "123");
    authService.login("john@test.com", "123");

    authService.logout();

    const user = authService.getCurrentUser();

    expect(user).toBeNull();
  });
});