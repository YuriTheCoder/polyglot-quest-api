<?php
/**
 * CompleteQuest200ResponseDataGamification
 *
 * PHP version 8.1
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Gamified Task Management API
 *
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.13.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * CompleteQuest200ResponseDataGamification Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CompleteQuest200ResponseDataGamification implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'completeQuest_200_response_data_gamification';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'xp_gained' => 'float',
        'leveled_up' => 'bool',
        'new_level' => 'float',
        'new_badges' => 'string[]',
        'total_xp' => 'float',
        'current_streak' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'xp_gained' => null,
        'leveled_up' => null,
        'new_level' => null,
        'new_badges' => null,
        'total_xp' => null,
        'current_streak' => null
    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'xp_gained' => false,
        'leveled_up' => false,
        'new_level' => false,
        'new_badges' => false,
        'total_xp' => false,
        'current_streak' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'xp_gained' => 'xpGained',
        'leveled_up' => 'leveledUp',
        'new_level' => 'newLevel',
        'new_badges' => 'newBadges',
        'total_xp' => 'totalXP',
        'current_streak' => 'currentStreak'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'xp_gained' => 'setXpGained',
        'leveled_up' => 'setLeveledUp',
        'new_level' => 'setNewLevel',
        'new_badges' => 'setNewBadges',
        'total_xp' => 'setTotalXp',
        'current_streak' => 'setCurrentStreak'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'xp_gained' => 'getXpGained',
        'leveled_up' => 'getLeveledUp',
        'new_level' => 'getNewLevel',
        'new_badges' => 'getNewBadges',
        'total_xp' => 'getTotalXp',
        'current_streak' => 'getCurrentStreak'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[]|null $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('xp_gained', $data ?? [], null);
        $this->setIfExists('leveled_up', $data ?? [], null);
        $this->setIfExists('new_level', $data ?? [], null);
        $this->setIfExists('new_badges', $data ?? [], null);
        $this->setIfExists('total_xp', $data ?? [], null);
        $this->setIfExists('current_streak', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets xp_gained
     *
     * @return float|null
     */
    public function getXpGained()
    {
        return $this->container['xp_gained'];
    }

    /**
     * Sets xp_gained
     *
     * @param float|null $xp_gained xp_gained
     *
     * @return self
     */
    public function setXpGained($xp_gained)
    {
        if (is_null($xp_gained)) {
            throw new \InvalidArgumentException('non-nullable xp_gained cannot be null');
        }
        $this->container['xp_gained'] = $xp_gained;

        return $this;
    }

    /**
     * Gets leveled_up
     *
     * @return bool|null
     */
    public function getLeveledUp()
    {
        return $this->container['leveled_up'];
    }

    /**
     * Sets leveled_up
     *
     * @param bool|null $leveled_up leveled_up
     *
     * @return self
     */
    public function setLeveledUp($leveled_up)
    {
        if (is_null($leveled_up)) {
            throw new \InvalidArgumentException('non-nullable leveled_up cannot be null');
        }
        $this->container['leveled_up'] = $leveled_up;

        return $this;
    }

    /**
     * Gets new_level
     *
     * @return float|null
     */
    public function getNewLevel()
    {
        return $this->container['new_level'];
    }

    /**
     * Sets new_level
     *
     * @param float|null $new_level new_level
     *
     * @return self
     */
    public function setNewLevel($new_level)
    {
        if (is_null($new_level)) {
            throw new \InvalidArgumentException('non-nullable new_level cannot be null');
        }
        $this->container['new_level'] = $new_level;

        return $this;
    }

    /**
     * Gets new_badges
     *
     * @return string[]|null
     */
    public function getNewBadges()
    {
        return $this->container['new_badges'];
    }

    /**
     * Sets new_badges
     *
     * @param string[]|null $new_badges new_badges
     *
     * @return self
     */
    public function setNewBadges($new_badges)
    {
        if (is_null($new_badges)) {
            throw new \InvalidArgumentException('non-nullable new_badges cannot be null');
        }
        $this->container['new_badges'] = $new_badges;

        return $this;
    }

    /**
     * Gets total_xp
     *
     * @return float|null
     */
    public function getTotalXp()
    {
        return $this->container['total_xp'];
    }

    /**
     * Sets total_xp
     *
     * @param float|null $total_xp total_xp
     *
     * @return self
     */
    public function setTotalXp($total_xp)
    {
        if (is_null($total_xp)) {
            throw new \InvalidArgumentException('non-nullable total_xp cannot be null');
        }
        $this->container['total_xp'] = $total_xp;

        return $this;
    }

    /**
     * Gets current_streak
     *
     * @return float|null
     */
    public function getCurrentStreak()
    {
        return $this->container['current_streak'];
    }

    /**
     * Sets current_streak
     *
     * @param float|null $current_streak current_streak
     *
     * @return self
     */
    public function setCurrentStreak($current_streak)
    {
        if (is_null($current_streak)) {
            throw new \InvalidArgumentException('non-nullable current_streak cannot be null');
        }
        $this->container['current_streak'] = $current_streak;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


