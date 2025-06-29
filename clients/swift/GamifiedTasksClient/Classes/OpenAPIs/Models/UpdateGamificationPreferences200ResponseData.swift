//
// UpdateGamificationPreferences200ResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct UpdateGamificationPreferences200ResponseData: Codable, JSONEncodable, Hashable {

    public var preferences: AnyCodable?

    public init(preferences: AnyCodable? = nil) {
        self.preferences = preferences
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case preferences
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(preferences, forKey: .preferences)
    }
}

