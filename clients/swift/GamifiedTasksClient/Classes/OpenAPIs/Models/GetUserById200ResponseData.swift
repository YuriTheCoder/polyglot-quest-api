//
// GetUserById200ResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct GetUserById200ResponseData: Codable, JSONEncodable, Hashable {

    public var user: User?
    public var taskStats: GetUserById200ResponseDataTaskStats?

    public init(user: User? = nil, taskStats: GetUserById200ResponseDataTaskStats? = nil) {
        self.user = user
        self.taskStats = taskStats
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case user
        case taskStats
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(user, forKey: .user)
        try container.encodeIfPresent(taskStats, forKey: .taskStats)
    }
}

