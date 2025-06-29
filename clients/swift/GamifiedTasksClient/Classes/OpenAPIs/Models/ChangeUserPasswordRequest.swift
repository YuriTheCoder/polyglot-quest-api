//
// ChangeUserPasswordRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ChangeUserPasswordRequest: Codable, JSONEncodable, Hashable {

    public static let newPasswordRule = StringRule(minLength: 6, maxLength: nil, pattern: nil)
    public var currentPassword: String
    public var newPassword: String

    public init(currentPassword: String, newPassword: String) {
        self.currentPassword = currentPassword
        self.newPassword = newPassword
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case currentPassword
        case newPassword
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(currentPassword, forKey: .currentPassword)
        try container.encode(newPassword, forKey: .newPassword)
    }
}

