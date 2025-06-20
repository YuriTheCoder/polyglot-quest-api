//
// User.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct User: Codable, JSONEncodable, Hashable {

    public enum Role: String, Codable, CaseIterable {
        case user = "user"
        case admin = "admin"
    }
    public var id: String?
    public var name: String?
    public var email: String?
    public var role: Role?
    public var isActive: Bool?
    public var lastLogin: Date?
    public var gamification: UserGamification?

    public init(id: String? = nil, name: String? = nil, email: String? = nil, role: Role? = nil, isActive: Bool? = nil, lastLogin: Date? = nil, gamification: UserGamification? = nil) {
        self.id = id
        self.name = name
        self.email = email
        self.role = role
        self.isActive = isActive
        self.lastLogin = lastLogin
        self.gamification = gamification
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case id
        case name
        case email
        case role
        case isActive
        case lastLogin
        case gamification
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(id, forKey: .id)
        try container.encodeIfPresent(name, forKey: .name)
        try container.encodeIfPresent(email, forKey: .email)
        try container.encodeIfPresent(role, forKey: .role)
        try container.encodeIfPresent(isActive, forKey: .isActive)
        try container.encodeIfPresent(lastLogin, forKey: .lastLogin)
        try container.encodeIfPresent(gamification, forKey: .gamification)
    }
}


@available(iOS 13, tvOS 13, watchOS 6, macOS 10.15, *)
extension User: Identifiable {}
